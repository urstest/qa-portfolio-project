# Test Automation Project

## Overview

This project is a test automation portfolio created to demonstrate practical QA skills using **Cypress**.  
It covers both **UI testing** and **REST API testing**, including positive and negative scenarios, Page Object Pattern, and full end-to-end user flows.

The goal of this project is to simulate a real e-commerce testing environment and present structured, maintainable automation code.

---

## Technologies

- Cypress
- JavaScript
- Node.js
- REST API
- Page Object Pattern
- Git & GitHub

---

## Project Structure

cypress/
├─ e2e/ # UI test cases
├─ e2e/api/ # API test cases
├─ pages/ # Page Objects
├─ fixtures/ # Test data (optional)
└─ support/ # Cypress configuration

---

## UI Test Coverage

- Login – positive scenario
- Login – negative scenario
- Logout
- Add product to cart
- Remove product from cart
- Product sorting
- Checkout – successful order
- Checkout – form validation errors

Features:

- Page Object Pattern
- Positive & negative scenarios
- Full end-to-end user flow

---

## API Test Coverage

Using public demo API (JSONPlaceholder):

- GET request validation
- POST request validation
- DELETE request validation
- Negative scenario (invalid resource)
- Status code and response body assertions

---

## How to Run Tests

npx cypress open

### Install dependencies

```bash
npm install
```
