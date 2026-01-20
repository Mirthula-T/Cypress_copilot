Feature: Shopping Cart
  As a logged-in user
  I want to manage items in my shopping cart
  So that I can purchase products

  Background:
    Given I am on the product page

  Scenario: Add item to cart
    When I click the add to cart button for "Product A"
    Then I should see 1 items in the cart

  Scenario: Add multiple items to cart
    When I click the add to cart button for "Product A"
    And I click the add to cart button for "Product B"
    Then I should see 2 items in the cart
    And I should see "Product A" in the cart
    And I should see "Product B" in the cart

  Scenario: Remove item from cart
    Given I have added 2 items to my cart
    When I open the cart
    And I remove "Product A" from the cart
    Then I should see 1 items in the cart
    And I should not see "Product A" in the cart

  Scenario: Update item quantity in cart
    Given I have added 1 items to my cart
    When I open the cart
    And I update the quantity of "Product A" to 3
    Then the total price should be "$30.00"

  Scenario: Proceed to checkout with items in cart
    Given I have added 1 items to my cart
    When I open the cart
    And I proceed to checkout
    Then I should be redirected to the checkout page

  Scenario: View empty cart
    When I open the cart
    Then I should see an empty cart message