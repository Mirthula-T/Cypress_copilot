# Cypress Testing Environment

This directory contains the Cypress testing environment for testing login, registration, profile management, and cart functionalities.

## Folder Structure

```
cypress/
├── e2e/
│   └── features/           # Feature files in Gherkin syntax
├── support/
│   ├── step_definitions/   # Step definition files
│   ├── commands.js         # Custom Cypress commands
│   └── e2e.js              # Cypress support file
├── pages/                  # Page Object Model files
└── cypress.config.js       # Cypress configuration
```

## Functionalities Covered

1. **Login**
   - Successful login with valid credentials
   - Error handling for invalid credentials
   - Navigation to registration page

2. **Registration**
   - Successful user registration
   - Validation for password matching
   - Email format validation
   - Navigation to login page

3. **Profile Management**
   - Updating profile information
   - Canceling profile updates
   - Validation for email format

4. **Cart Management**
   - Adding items to cart
   - Removing items from cart
   - Updating item quantities
   - Proceeding to checkout

## Installation

1. Navigate to the cypress directory:
   ```bash
   cd cypress
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running Tests

### Open Cypress Test Runner
```bash
npm run cy:open
```

### Run Tests in Headless Mode
```bash
npm run cy:run
```

### Run Specific Feature Files
```bash
npm test
```

## Using Generated Code from Cypress Copilot

1. Generate POM and step definition files using Cypress Copilot
2. Replace the corresponding files in the `cypress/pages/` and `cypress/support/step_definitions/` directories
3. Run the tests to verify the generated code works correctly

## Custom Commands

The following custom commands are available:
- `cy.login(username, password)` - Log in with provided credentials
- `cy.register(firstName, lastName, email, password)` - Register a new user
- `cy.addToCart(productName)` - Add a product to the cart

## Page Objects

Each functionality has a corresponding Page Object Model:
- `LoginPage` - For login page interactions
- `RegistrationPage` - For registration page interactions
- `ProfilePage` - For profile management interactions
- `CartPage` - For cart management interactions