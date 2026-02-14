# Application Analysis – SauceDemo

## 1. General Information

**Application Name:** SauceDemo  
**Type:** Web Application  
**Domain:** E-commerce (Demo Store)  
**Main Purpose:** Practice manual testing and UI test automation.  
The application simulates a simple online shop where users can log in, browse products, add them to a cart, and complete a checkout process.

---

## 2. Main Functionalities

- User login
- Viewing product list
- Sorting products (price/name)
- Adding products to cart
- Removing products from cart
- Viewing cart
- Checkout process
- Logout

---

## 3. User Roles

The application provides multiple predefined user accounts with different behaviors:

- **Standard User** – normal application behavior
- **Locked Out User** – cannot log in
- **Problem User** – visual/UI issues
- **Performance Glitch User** – slow loading times

These roles allow testing different scenarios and edge cases.

---

## 4. Key Pages / Modules

- Login Page
- Inventory (Products) Page
- Product Details Page
- Cart Page
- Checkout Information Page
- Checkout Overview Page
- Order Confirmation Page

---

## 5. Test Opportunities

### Functional Testing

- Login with valid credentials
- Login with invalid credentials
- Add/remove items from cart
- Checkout flow validation
- Logout functionality

### UI Testing

- Button visibility and alignment
- Layout consistency
- Font and color consistency
- Responsive behavior (optional)

### Negative Testing

- Empty login form
- Invalid username/password
- Extremely long input values
- Removing non-existing items from cart

### Performance Testing (Basic)

- Page load time
- Product list loading speed
- Checkout speed

---

## 6. Potential Risks

- Login failure blocks all further user actions
- Cart calculation errors may affect checkout accuracy
- Sorting or filtering bugs may confuse users
- Performance issues may reduce usability
- UI inconsistencies may reduce user trust

---

## 7. Planned Testing Tools

- **Manual Testing** – exploratory and structured test cases
- **UI Automation** – Cypress
- **API Testing** – Postman
- **Version Control** – Git & GitHub
- **Test Management** – Markdown
