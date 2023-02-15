Feature: Checkout Flow- As a customer the user is able login, add the product into the cart, add address and reach to the checkout page

Background:
  Given I am on the homepage of the website "https://tgm-staging.myshopify.com/"

Scenario: Verify that user is able to add the product into the cart with guest user
  When I search a product "B407V7 Baby Organic Cotencel Leggings" and add it into the cart
  And I click on the cart notification to go to the cart page
  And Verify that the user is on cart page with added product name "B407V7 Baby Organic Cotencel Leggings"

Scenario: Verify that user is able to add the shipping address and proceed with guest user
  When I search a product "B407V7 Baby Organic Cotencel Leggings" and add it into the cart
  And I click on the cart notification to go to the cart page
  And Verify that the user is on cart page with added product name "B407V7 Baby Organic Cotencel Leggings"
  And I click on the Checkout button
  Then Verify that the user redirects to "Contact information" page
  And I should be able to enter my shipping information
  |Email            |LastName |Address |City      |Phone     |
  |test.test@tgm.com|Test     |Test    |Test city |1111111111|
  And Verify that user redirects to the Shipping method page "Shipping method"
   And Click on Continue to Payment button
  And Verify that the user is redirected to "Payment" page

Scenario: Verify that user is able to login, add a product into cart, add shipping address and proceed to checkout page
  When I click on the Account icon, redirects to the login page
  And I enter my email address and password to log in
  |Email       |Password    |
  |test@tgm.com|test@tgm.com|
  And Verify that the user redirects to account page with title "Account"
  Then I search a product "B407V7 Baby Organic Cotencel Leggings" and add it into the cart
  And I click on the cart notification to go to the cart page
  And Verify that the user is on cart page with added product name "B407V7 Baby Organic Cotencel Leggings"
  And I click on the Checkout button
  Then Verify that the user redirects to "Contact information" page
  And I should be able to enter the below shipping information with logged in user
  |LastName |Address |City      |Phone     |
  |Test     |Test    |Test city |222222222 |
  And Verify that user redirects to the Shipping method page "Shipping method"
  And Click on Continue to Payment button
  And Verify that the user is redirected to "Payment" page