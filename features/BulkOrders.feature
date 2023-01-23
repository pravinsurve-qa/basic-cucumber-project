@bulk
Feature: create coffee orders

    @bulkCreate
    Scenario Outline: Customer order coffees and sadwiches in bulk
        Given Shop has sufficient resources to prepare 'coffee'
        And Shop has sufficient resources to prepare 'sandwich'
        When Customer orders <value1> cappucino, <value2> latte, <value3> espresso
        And Customer orders 5 cheese sandwich, 5 vegan sadwich
        Then Order should be placed successfully
        And Display estimate time for order to prepare
        Examples:
            | value1 | value2 | value3 |
            | 2      | 5      | 1      |
            | 20     | 50     | 10     |
            | 200    | 500    | 100    |