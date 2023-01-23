const { BeforeAll, AfterAll, Before, After } = require("@cucumber/cucumber");

BeforeAll(function () {
    console.log("Starting coffee machine....");
});

AfterAll(function () {
    console.log("Machine power off");
});

Before(function () {
    console.log("Machine is active !");
});

After(function () {
    console.log("Machine de-activated");
});