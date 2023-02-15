const locators = {
  headerSearch: '.header__icon--search',
  searchBox: '#Search-In-Modal',
  txtSearchBtn: '.search__button.field__button',
  productCardLink: 'li.grid__item',
  addToCartBtn: '[name="add"]',
  cartNotificationBtn:'#cart-notification-button',
  checkoutBtn: 'button#checkout[type="submit"]',
  txtHeaderName: '#primary-header',
  productInCartTxt:'.cart-item__name.h4.break',
  shippingLastName: '[name="lastName"]:not([aria-hidden=true])',
  enterEmail: '#email',
  address:'[name="address1"]:not([aria-hidden=true])',
  city:'[name="city"]:not([aria-hidden=true])',
  phone:'[name="phone"]:not([aria-hidden=true])',
  country:'[name="zone"].sWGEL',
  continueToShippingButton:'._3XHWd._7J8O [type="submit"]',
  accountIcon:'.header__icon--account',
  loginEmail:'#CustomerEmail',
  loginPassword:'#CustomerPassword',
  signInBtn:'#customer_login > button',
  accountTxtLoggedInUser: '.customer__title',
  continueToPaymentBtn: 'button:contains("Continue to payment"):not([aria-hidden=true])',
};

export class CheckoutFlow {
  gotoHomePage(httpstgmstagingmyshopifycom){
    cy.visit(httpstgmstagingmyshopifycom);
  }

  enableSearchBox(){
    cy.get(locators.headerSearch).click();
  }

  searchTxtBox(productName){
    cy.get(locators.searchBox).type(productName);
  }

  txtSearchBoxbtn(){
    cy.get(locators.txtSearchBtn).click();
  }

  productCard(){
    cy.get(locators.productCardLink).first().click();
  }

  pdpAddToCartBtn(){
    cy.get(locators.addToCartBtn).click();
  }

  cartNotificationBtn(){
    cy.get(locators.cartNotificationBtn).click();
  }

  productInCart(productAddedInCart){
    cy.get(locators.productInCartTxt).invoke('text').should('equal', productAddedInCart);
  }
  
  cartPageCheckoutBtn(){
    cy.get(locators.checkoutBtn).click();
  }
    
  checkoutInfoPageHeader(contactinformationTxt){
    cy.get(locators.txtHeaderName).invoke('text')
    .should('equal', contactinformationTxt);
  }

  addShippingAddressWithGuest(
    email,
    lastName,
    addressName,
    cityName,
    phoneNo,
  ){
    cy.get(locators.enterEmail).type(email);
    cy.get(locators.shippingLastName).type(lastName);
    cy.get(locators.address).type(addressName);
    cy.get(locators.city).type(cityName);
    cy.get(locators.country).select('Ajman');
    cy.get(locators.phone).type(phoneNo);
    cy.get(locators.continueToShippingButton).click();
    cy.wait(2000);
  }

  addShippingAddressWithLoginUser(
    lastName,
    addressName,
    cityName,
    phoneNo,
  ){
    cy.get(locators.shippingLastName).clear( { force: true }).type(lastName);
    cy.get(locators.address).type(addressName);
    cy.get(locators.city).type(cityName);
    cy.get(locators.country).select('Ajman');
    cy.get(locators.phone).type(phoneNo);
    cy.get(locators.continueToShippingButton).click();
    cy.wait(2000);
  }

  accountLoginPage(){
    cy.get(locators.accountIcon).click();
    cy.wait(2000);
  }
    
  loginWithCreds(
    loginEmailAddress,
    loginPasswordValue,
  ){
    cy.get(locators.loginEmail).click().type(loginEmailAddress);
    cy.get(locators.loginPassword).type(loginPasswordValue);
    cy.get(locators.signInBtn).click();
    cy.wait(2000);
  }

  infoHeaderShippingPageTxt(shippingmethod){
    cy.get(locators.txtHeaderName).invoke('text')
    .should('equal', shippingmethod);
  }

  verifyAccountPageTxt(accountPageTxt){
    cy.get(locators.accountTxtLoggedInUser).invoke('text')
    .should('equal', accountPageTxt);
  }

  continueToPayment(){
    cy.get(locators.continueToPaymentBtn).click();
    cy.wait(2000);
  }
  verifyPaymentPageTxt(paymentPageTxt){
    cy.get(locators.txtHeaderName).invoke('text')
    .should('equal', paymentPageTxt);
  }
}
