const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require('node:assert');

Given('Shop has sufficient resources to prepare {string}', function (resourceType) {
    console.log("resources for " + resourceType + " available");
});

When('Customer orders {int} cappucino, {int} latte, {int} espresso', function (value1, value2, value3) {
    var totalOrders = value1 + value2 + value3;
    if (totalOrders > 500) {
        assert.fail(true, "Error: Order limit per customer is 500");
    } else {
        console.log(`Customer has ordered "${totalOrders}" coffees`);
    }
});

When('Customer orders {int} cheese sandwich, {int} vegan sadwich', function (value1, value2) {
    var totalOrders = value1 + value2;
    console.log("Customer has ordered " + totalOrders + " sandwiches");
});