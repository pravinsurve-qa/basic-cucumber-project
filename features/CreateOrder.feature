@order
Feature: create coffee orders

    Background: Teller login
        Given Teller successfully logins into system

    @create
    Scenario: Customer orders cappuccino coffee and sandwich
        Given Shop has sufficient resources
        When Customer orders cappucino and sandwich
        Then Order should be placed successfully
        And Display estimate time for order to prepare

    @multiCreate
    Scenario Outline: Customer orders '<order1>' and '<order2>'
        Given Shop has sufficient resources
        When Customer orders <order1> and <order2>
        Then Order should be placed successfully
        And Display estimate time for order to prepare
        Examples:
            | order1        | order2                |
            | cappucino     | sandwich              |
            | cupcake       | latte                 |
            | caramel mocha | double creme espresso |

    @cancel
    Scenario: Customer cancels order
        Given Shop has sufficient resources
        When Customer orders cappucino and sandwich
        Then Order should be placed successfully
        And Display estimate time for order to prepare
        When Customer cancels order
        Then Refund should be processed