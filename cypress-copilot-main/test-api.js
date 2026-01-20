// Test script to verify the API endpoints
import fetch from 'node-fetch';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

async function testAPI() {
  const apiKey = process.env.OPENAI_API_KEY;
  const bddScenario = `Feature: Login
    Scenario: Successful login
        Given I am on the login page
        When I enter valid credentials
        Then I should be redirected to the dashboard`;
  
  const model = 'gpt-4o-mini';
  
  // Check if API key is available
  if (!apiKey) {
    console.error('OPENAI_API_KEY not found in environment variables');
    return;
  }
  
  try {
    // Test step definition generation
    console.log('Testing step definition generation...');
    const stepResponse = await fetch('http://localhost:3001/api/generate-step-def', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        apiKey,
        bddScenario,
        model
      })
    });
    
    const stepData = await stepResponse.json();
    console.log('Step definition response status:', stepResponse.status);
    
    if (stepResponse.status !== 200) {
      console.error('Error from step definition API:', stepData);
      return;
    }
    
    if (stepData.choices && stepData.choices[0]) {
      const stepDefinition = stepData.choices[0].message.content;
      console.log('Generated step definition:', stepDefinition);
      
      // Test POM generation
      console.log('Testing POM generation...');
      const pomResponse = await fetch('http://localhost:3001/api/generate-pom', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          apiKey,
          stepDefinition,
          model
        })
      });
      
      const pomData = await pomResponse.json();
      console.log('POM response status:', pomResponse.status);
      
      if (pomResponse.status !== 200) {
        console.error('Error from POM API:', pomData);
        return;
      }
      
      if (pomData.choices && pomData.choices[0]) {
        const pomCode = pomData.choices[0].message.content;
        console.log('Generated POM code:', pomCode);
      }
    }
  } catch (error) {
    console.error('Error testing API:', error);
  }
}

testAPI();