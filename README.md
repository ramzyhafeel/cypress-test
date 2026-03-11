# Cypress Assignment Demo - SE3010

This project was created to demonstrate key Cypress testing features for the SE3010 group assignment.

## Group Objective

Our group selected **Cypress** as the software quality/testing tool and used the **Cypress Example Website** for demonstration:

https://example.cypress.io/

We demonstrate these 5 features:

1. Assertions  
2. Fixtures / Setup-Teardown Mechanisms  
3. Mocking / Stubbing  
4. Behaviour-Driven Development (BDD) Syntax  
5. Test Reporting  

---

## Why We Selected the Cypress Example Website

We used the Cypress default example website because:

- it is stable and beginner-friendly
- it already contains pages useful for testing
- it is suitable for showing Cypress features clearly
- it allows us to demonstrate the full workflow from setup to execution and reporting

---

## Project Structure

```bash
cypress-new
│
├── cypress
│   ├── e2e
│   │   ├── assertion.cy.js
│   │   ├── fixtures-hooks.cy.js
│   │   ├── mocking-stubbing.cy.js
│   │   └── bdd
│   │       ├── homepage.feature
│   │       └── homepage.cy.js
│   │
│   ├── fixtures
│   │   └── siteData.json
│   │
│   ├── reports
│   │
│   └── support
│       └── e2e.js
│
├── cypress.config.js
├── package.json
└── README.md

Prerequisites

Before running this project, install:
Node.js 22
npm
Git
VS Code (recommended)


How to Clone and Run This Project
1. Clone the repository
git clone <YOUR_GIT_REPO_LINK>
cd cypress-new
2. Install dependencies
npm install
3. Open Cypress test runner
npx cypress open
4. Run all tests in headless mode
npx cypress run

Simple Viva Lines for Each Member
Assertions

“I am demonstrating Assertions in Cypress. Assertions are used to verify expected results such as URL, title, and visible page content.”

Fixtures / Hooks

“I am demonstrating Fixtures and setup mechanisms. The fixture file stores reusable test data, and hooks such as beforeEach() prepare the test environment before each test.”

Mocking / Stubbing

“I am demonstrating Mocking and Stubbing. We intercept an API request using cy.intercept() and replace the real response with a custom fake response.”

BDD Syntax

“I am demonstrating Behaviour-Driven Development syntax using Cucumber with Cypress. The scenario is written in plain English using Given, When, and Then.”

Test Reporting

“I am demonstrating Test Reporting. After running all tests, Cypress generates a detailed report that shows execution results and pass/fail status.”