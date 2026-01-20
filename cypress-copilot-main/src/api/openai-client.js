/**
 * OpenAI Client for Cypress Copilot
 * This module provides functions to interact with OpenAI API for generating
 * Cypress test code from BDD scenarios.
 */

import config from '../config.json';

/**
 * Generate step definition code from BDD scenario
 * @param {string} apiKey - OpenAI API key
 * @param {string} inputText - BDD scenario text
 * @param {string} modelName - OpenAI model name
 * @returns {Promise<string>} Generated step definition code
 */
export async function openAIcallStep(apiKey, inputText, modelName) {
    try {
        const featureCode = Array.isArray(config.few_shot_assistant_feature_code) 
            ? config.few_shot_assistant_feature_code.join('') 
            : config.few_shot_assistant_feature_code;
            
        const stepCode = Array.isArray(config.few_shot_assistant_step_code) 
            ? config.few_shot_assistant_step_code.join('') 
            : config.few_shot_assistant_step_code;

        const messages = [
            { role: "system", content: config.system_prompt_code },
            { role: "user", content: "for {feature} =" + featureCode },
            { role: "assistant", content: "the example step definition javascript file is {step} = " + stepCode },
            {
                role: "user", content: "for {feature} = " + inputText + " lets think step by step. " +
                    "Step 1: Strictly follow exact syntax for importing page object class. Follow lower camel case name convention. " +
                    "The example syntax is - import {loginPage} from '@pages/LoginPage'. " +
                    "Step 2: Strictly write multiple imports when importing more than one page object class. " +
                    "For example, this is incorrect syntax - import { calcPage, compPage } from '@pages'; " +
                    "and the correct syntax example is - import { calcPage } from '@pages/CalcPage'; " +
                    "import { compPage } from '@pages/CompPage'; " +
                    "Step 3: Do not include explanation. " +
                    "Your task is to write the code with step definitions for every scenario and the javascript file is {step} ="
            }
        ];

        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: modelName,
                messages: messages,
                max_tokens: config['gpt_max_tokens'],
                temperature: config['gpt_temperature'],
                top_p: config['gpt_top_p']
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`OpenAI API error: ${response.status} ${response.statusText} - ${errorText}`);
        }

        const data = await response.json();
        
        // Check if the response has valid content
        const result = (data.choices && data.choices.length > 0 && data.choices[0].message && data.choices[0].message.content)
            ? data.choices[0].message.content
            : 'No response from OpenAI';

        console.log("OpenAI response for getStepCodeAPIcall:: " + JSON.stringify(data, null, 2));
        return result;

    } catch (error) {
        console.error('Error in openAIcallStep:', error);
        throw new Error(`Failed to generate step code: ${error.message}`);
    }
}

/**
 * Generate Page Object Model code from step definition code
 * @param {string} apiKey - OpenAI API key
 * @param {string} inputText - Step definition code
 * @param {string} modelName - OpenAI model name
 * @returns {Promise<string>} Generated Page Object Model code
 */
export async function openAIcallPom(apiKey, inputText, modelName) {
    try {
        // Convert arrays to strings for proper concatenation
        const stepCode = Array.isArray(config.few_shot_assistant_step_code) 
            ? config.few_shot_assistant_step_code.join('') 
            : config.few_shot_assistant_step_code;
            
        const pageCode = Array.isArray(config.few_shot_assistant_page_code) 
            ? config.few_shot_assistant_page_code.join('') 
            : config.few_shot_assistant_page_code;

        const messages = [
            { role: "system", content: config.system_prompt_code },
            { role: "user", content: "for the {step} file =" + stepCode },
            { role: "assistant", content: "the page object class implementation is {page} = " + pageCode },
            {
                role: "user", content: "lets think step by step. " +
                    "Step 1: Define all Web element methods along with their selectors. " +
                    "Step 2: Write the complete Web element interaction logic in the UI methods. " +
                    "Step 3: Provide a complete implementation for every verification method. " +
                    "Step 4: In the absence of implementation details, assume and write the code. Do not leave any method without full implementation. " +
                    "Step 5: If application behavior or functionality is unclear, assume the most common behavior/functionality. " +
                    "Step 6: Avoid leaving any placeholders; implement the full logic for each method. " +
                    "Step 7: Ensure that the Page Object Class is implemented for all page imports in the step definition file. " +
                    "Step 8: Ensure the Cypress code does not have any JavaScript type errors. " +
                    "Step 9: Review the generated code thoroughly. Verify each step, and if any step is not followed, rewrite the code accordingly. " +
                    "For the given {step} file = " + inputText + " the page object class implementation is {page} = "
            }
        ];

        const response = await fetch('http://localhost:3001/api/openai', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: modelName,
                messages: messages,
                max_tokens: config['gpt_max_tokens'],
                temperature: config['gpt_temperature'],
                top_p: config['gpt_top_p']
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`OpenAI API error: ${response.status} ${response.statusText} - ${errorText}`);
        }

        const data = await response.json();
        
        const result = (data.choices && data.choices.length > 0 && data.choices[0].message && data.choices[0].message.content)
            ? data.choices[0].message.content
            : 'No response from OpenAI';

        console.log("OpenAI response for getPomCodeAPIcall:: " + JSON.stringify(data, null, 2));
        return result;
    } catch (error) {
        console.error('Error in openAIcallPom:', error);
        throw new Error(`Failed to generate POM code: ${error.message}`);
    }
}

/**
 * Validate BDD format
 * @param {string} inputText - BDD scenario text
 * @returns {boolean} Whether the text follows valid BDD format
 */
export function isValidBDDFormat(inputText) {
    // Split the text into lines
    const lines = inputText.split('\n').map(line => line.trim());

    // Check if the first line starts with "Feature:"
    if (!lines[0]?.startsWith('Feature:')) {
        return false;
    }

    // Valid BDD keywords
    let expectedKeywords = ['given', 'when', 'then'];
    let keywordIndex = 0; // To track which keyword we are expecting

    for (const line of lines) {
        // Skip empty lines and lines that don't start with the expected keywords
        if (line === '' || !expectedKeywords.some(keyword => line.toLowerCase().startsWith(keyword))) {
            continue; // Skip this iteration if the line is empty or doesn't start with any of the expected keywords
        }

        // Check if the line starts with the expected keyword
        if (line.toLowerCase().startsWith(expectedKeywords[keywordIndex])) {
            keywordIndex++; // Move to the next keyword

            // If all three keywords have been found, stop further checking
            if (keywordIndex === 3) {
                break;
            }
        } else {
            console.log('Failed isValidBDDFormat():: ' + line);
            return false;
        }
    }

    // Check if we found all three keywords in the correct order
    if (keywordIndex !== 3) {
        console.log('The required sequence of "given", "when", "then" was not found.');
        return false;
    }

    // All checks passed, valid BDD format
    return true;
}

export default {
    openAIcallStep,
    openAIcallPom,
    isValidBDDFormat
};