import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());

// Serve static files from the src directory
app.use(express.static('src'));

// 🔑 Backend endpoint that calls OpenAI for step definitions
app.post("/api/generate-step-def", async (req, res) => {
  try {
    const { apiKey, bddScenario, model } = req.body;

    // Validate input
    if (!apiKey || !bddScenario) {
      return res.status(400).json({ error: "API key and BDD scenario are required" });
    }

    // System prompt for step definition generation
    const systemPrompt = "You are an expert Cypress Test Automation Engineer and you follow cypress coding best practices";

    // User prompt for step definition generation
    const userPrompt = `Generate step definition code for the following BDD scenario:
${bddScenario}

Follow these guidelines:
1. Use @badeball/cypress-cucumber-preprocessor library
2. Import page object classes with proper syntax
3. Write step definitions for every scenario step
4. Return only the code, no explanations`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: model || "gpt-4o-mini",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
        max_tokens: 2000,
        temperature: 0.2
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`OpenAI API error: ${errorData.error?.message || response.statusText}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error("Error in /api/generate-step-def:", err);
    res.status(500).json({ error: err.message });
  }
});

// 🔑 Backend endpoint that calls OpenAI for POM generation
app.post("/api/generate-pom", async (req, res) => {
  try {
    const { apiKey, stepDefinition, model } = req.body;

    // Validate input
    if (!apiKey || !stepDefinition) {
      return res.status(400).json({ error: "API key and step definition are required" });
    }

    // System prompt for POM generation
    const systemPrompt = "You are an expert Cypress Test Automation Engineer and you follow cypress coding best practices";

    // User prompt for POM generation
    const userPrompt = `Generate Page Object Model code for the following step definition:
${stepDefinition}

Follow these guidelines:
1. Create a class with UI element selectors
2. Implement methods for UI interactions
3. Include verification methods
4. Return only the code, no explanations`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: model || "gpt-4o-mini",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
        max_tokens: 2000,
        temperature: 0.2
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`OpenAI API error: ${errorData.error?.message || response.statusText}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error("Error in /api/generate-pom:", err);
    res.status(500).json({ error: err.message });
  }
});

// Health check endpoint
app.get("/", (req, res) => {
  res.send("Cypress Copilot Server is running!");
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));