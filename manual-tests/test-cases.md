# Test Cases – SauceDemo UI

## TC-01 – Valid Login

**Preconditions:**  
User is on the login page.

**Test Steps:**

1. Enter valid username.
2. Enter valid password.
3. Click "Login" button.

**Expected Result:**  
User is successfully logged in and redirected to the inventory/products page.

**Priority:** High  
**Type:** Positive / Functional

---

## TC-02 – Invalid Password Login

**Preconditions:**  
User is on the login page.

**Test Steps:**

1. Enter valid username.
2. Enter invalid password.
3. Click "Login" button.

**Expected Result:**  
Error message is displayed and user remains on login page.

**Priority:** High  
**Type:** Negative / Functional

---

## TC-03 – Empty Login Form

**Preconditions:**  
User is on the login page.

**Test Steps:**

1. Leave username field empty.
2. Leave password field empty.
3. Click "Login" button.

**Expected Result:**  
Validation error message is displayed.

**Priority:** Medium  
**Type:** Negative / Validation

---

## TC-04 – Add Product to Cart

**Preconditions:**  
User is logged in and on the inventory page.

**Test Steps:**

1. Click "Add to Cart" button for any product.
2. Open cart page.

**Expected Result:**  
Selected product appears in the cart with correct name and price.

**Priority:** High  
**Type:** Functional

---

## TC-05 – Logout

**Preconditions:**  
User is logged in.

**Test Steps:**

1. Open the side menu.
2. Click "Logout".

**Expected Result:**  
User is redirected to the login page and session is ended.

**Priority:** Medium  
**Type:** Functional / Security

---

## TC-06 – Remove Product from Cart

**Preconditions:**  
User is logged in.  
At least one product is added to the cart.

**Test Steps:**

1. Open cart page.
2. Click "Remove" button for a product.

**Expected Result:**  
Product is removed from the cart and cart count updates correctly.

**Priority:** High  
**Type:** Functional

---

## TC-07 – Product Sorting by Price (Low to High)

**Preconditions:**  
User is logged in and on the inventory page.

**Test Steps:**

1. Open sorting dropdown.
2. Select "Price (low to high)".

**Expected Result:**  
Products are displayed in ascending price order.

**Priority:** Medium  
**Type:** Functional / UI

---

## TC-08 – Checkout with Valid Data

**Preconditions:**  
User is logged in.  
At least one product is in the cart.

**Test Steps:**

1. Open cart.
2. Click "Checkout".
3. Enter valid first name, last name, and postal code.
4. Continue and finish order.

**Expected Result:**  
Order confirmation page is displayed successfully.

**Priority:** High  
**Type:** Functional / Positive

---

## TC-09 – Checkout with Empty Form

**Preconditions:**  
User is logged in.  
At least one product is in the cart.

**Test Steps:**

1. Open cart.
2. Click "Checkout".
3. Leave all fields empty.
4. Click "Continue".

**Expected Result:**  
Validation error message is displayed and checkout is blocked.

**Priority:** Medium  
**Type:** Negative / Validation

---

## TC-10 – Extremely Long Input Values

**Preconditions:**  
User is on checkout information page.

**Test Steps:**

1. Enter 200+ characters in First Name field.
2. Enter 200+ characters in Last Name field.
3. Enter long postal code.
4. Click "Continue".

**Expected Result:**  
System handles long input correctly (validation or truncation).  
No crash or UI break occurs.

**Priority:** Low  
**Type:** Edge Case / Negative
