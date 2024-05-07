const calculateTotal = require("./calculate-total")

// https://jestjs.io/docs/getting-started
// https://jestjs.io/docs/expect

// Run tests with: npm test -- calculate-total.test.js

describe("calculate total", () => {
  // should the basket not have item and quantity
  // should calculate total price for a single item in the basket
  // should throw an error if basket is not provided
  // should throw an error if price is not found for an item


  test('should calculate total price for a single item in the basket', () => {
      const basket = [ { "item": "Milk", "quantity": 2 } ]
      expect(calculateTotal(basket)).toBe(1.78)
  })
  
  test('should calculate total price for a single item in the basket', () => {
      const basket = [
            { "item": "Milk", "quantity": 2 },
            { "item": "Bread", "quantity": 1 }
      ]
      expect(calculateTotal(basket)).toBe(2.98)
  })

  test('should throw an error if basket is not provided', () => {
      expect(() => calculateTotal().toThrow())
  })

  test('should throw an error if price is not provided', () => {
      const basket = [{ item: 'Water', quantity: 1 }];
      expect(() => calculateTotal(basket).toThrow(Error))
  })

  
})

