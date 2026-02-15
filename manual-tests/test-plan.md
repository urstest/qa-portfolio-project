# Test Plan – UI & API Testing Project

## 1. Introduction

This document describes the testing strategy for a demo QA project that includes:

- UI and manual testing of the SauceDemo web application
- API testing using the Reqres public API

The purpose of this project is to demonstrate QA skills including manual testing, UI automation, API validation, and test documentation.

---

## 2. Scope of Testing

### In Scope

#### UI Testing – SauceDemo

- Login functionality
- Product listing
- Sorting products
- Add to cart / Remove from cart
- Cart view
- Checkout process
- Logout functionality
- Basic UI validation

#### API Testing – Reqres

- GET requests
- POST requests
- DELETE requests
- Status code validation
- Response body validation
- JSON structure validation

---

### Out of Scope

- Security testing
- Advanced performance/load testing
- Cross-browser testing
- Mobile testing
- Database testing
- Accessibility compliance

---

## 3. Test Objectives

- Verify core functionalities work as expected
- Identify functional and UI defects
- Validate API endpoints and responses
- Demonstrate ability to design and execute test cases
- Demonstrate automation and documentation skills

---

## 4. Test Types

### Manual Testing

- Exploratory testing
- Functional testing
- Negative testing
- UI validation

### Automated Testing

- UI automation tests
- API automated tests

### Basic Performance Checks

- Page load speed (visual estimation)
- API response time observation

---

## 5. Test Environment

### UI

- Browser: Google Chrome (latest stable version)
- OS: Windows
- Internet connection required

### API

- Tool: Postman
- Public API endpoints

---

## 6. Entry Criteria

- Application is accessible
- Test accounts are available
- API endpoints respond
- Testing tools installed and configured

---

## 7. Exit Criteria

- All planned test cases executed
- Critical bugs documented
- Automation tests executed successfully
- Test documentation completed

---

## 8. Test Deliverables

- Test Plan
- Test Cases
- Bug Reports
- UI Automation Tests
- API Automation Tests
- README documentation

---

## 9. Risks

### UI Risks

- Login failure blocks further testing
- Cart calculation errors
- UI layout inconsistencies
- Performance slowdowns

### API Risks

- Endpoint instability
- Unexpected response formats
- Rate limiting or downtime
- Inconsistent status codes

---

## 10. Tools

- Manual Testing – Browser
- UI Automation – Cypress
- API Testing – Postman
- Version Control – Git & GitHub
- Documentation – Markdown

---

## 11. Assumptions

- Demo applications remain publicly accessible
- No authentication tokens required for API
- Test data is reusable and non-sensitive

---

## 12. Conclusion

This test plan provides a structured approach to validating both a UI demo application and a public API.  
The project focuses on demonstrating practical QA skills rather than full enterprise-level coverage.
