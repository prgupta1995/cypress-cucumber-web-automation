import { CheckoutFlow } from '../../pages/Checkout';
import {
  Given,
  When,
  Then,
  And,
} from '@badeball/cypress-cucumber-preprocessor';

const checkoutFlowPage = new CheckoutFlow();
Given(/^I am on the homepage of the website \"([^\"]*)\"$/, function (httpstgmstagingmyshopifycom) {
  checkoutFlowPage.gotoHomePage(httpstgmstagingmyshopifycom);
});

When(/^I search a product \"([^\"]*)\" and add it into the cart$/, function (productName) {
  checkoutFlowPage.enableSearchBox();
  checkoutFlowPage.searchTxtBox(productName);
  checkoutFlowPage.txtSearchBoxbtn();
  checkoutFlowPage.productCard();
  checkoutFlowPage.pdpAddToCartBtn();
});

And(/^I click on the Checkout button$/, function (checkout) {
  checkoutFlowPage.cartPageCheckoutBtn();

});

And(/^I click on the cart notification to go to the cart page$/, function () {
  checkoutFlowPage.cartNotificationBtn();

});

And(/^Verify that the user is on cart page with added product name \"([^\"]*)\"$/, function (productAddedInCart) {
  checkoutFlowPage.productInCart(productAddedInCart);
});

Then(/^Verify that the user redirects to \"([^\"]*)\" page$/, function (contactinformationTxt) {
  checkoutFlowPage.checkoutInfoPageHeader(contactinformationTxt);

});

And(/^I should be able to enter my shipping information$/, function (datatable) {
  const table = datatable.hashes();
  table.forEach((row) => {
    checkoutFlowPage.addShippingAddressWithGuest(
      row.Email,
      row.LastName,
      row.Address,
      row.City,
      row.Phone,
    );
  });
});

And(/^Verify that user redirects to the Shipping method page \"([^\"]*)\"$/, function (shippingmethod) {
  checkoutFlowPage.infoHeaderShippingPageTxt(shippingmethod);
});

When(/^I click on the Account icon, redirects to the login page$/, function () {
  checkoutFlowPage.accountLoginPage();
});

And(/^I enter my email address and password to log in$/, function (datatable) {
  const table = datatable.hashes();
  table.forEach((row) => {
    checkoutFlowPage.loginWithCreds(
      row.Email,
      row.Password,
    );
  });
});

And(/^I should be able to enter the below shipping information with logged in user$/, function (datatable) {
  const table = datatable.hashes();
  table.forEach((row) => {
    checkoutFlowPage.addShippingAddressWithLoginUser(
      row.LastName,
      row.Address,
      row.City,
      row.Phone,
    );
  });
});

And(/^Verify that the user redirects to account page with title \"([^\"]*)\"$/, function (accountPageTxt) {
 checkoutFlowPage.verifyAccountPageTxt(accountPageTxt);
});

When(/^Click on Continue to Payment button$/, function () {
  checkoutFlowPage.continueToPayment();
});

And(/^Verify that the user is redirected to \"([^\"]*)\" page$/, function (paymentPageTxt) {
  checkoutFlowPage.verifyPaymentPageTxt(paymentPageTxt)
});
