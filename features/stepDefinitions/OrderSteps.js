const { Given, When, Then } = require("@cucumber/cucumber");

Given('Teller successfully logins into system', function () {
    console.log("Login successfull :-) ");
});

Given('Shop has sufficient resources', function () {
    console.log("resources are available");
});

When(/^Customer orders (.*) and (.*)$/, function (orderName1, orderName2) {
    console.log(orderName1 + " : order placed");
    console.log(orderName2 + " : order placed");
});

Then('Order should be placed successfully', function () {
    console.log("Order successful")
});

Then('Display estimate time for order to prepare', function () {
    var estTime = Math.floor(Math.random() * 10);
    console.log("Estimate time is "+ estTime + " minutes")
});

When('Customer cancels order', function () {
    console.log("Order cancel is initiated....")
});

Then('Refund should be processed', function () {
    console.log("Order cancelled successfully")
});