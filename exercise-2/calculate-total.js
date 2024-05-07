const prices = require('./prices.json')

// This function should calculate the total price of the items in the basket
//  - the basket is an array of objects, where each object contains an item and quantity
//  - for example: [ { "item": "Milk", "quantity": 2 } ]
function calculateTotal(basket) {
      if (basket.length === 0) {
            throw new Error('Basket must have item');
      }

      let total = 0;

      basket.forEach(item => {
        const itemPrice = prices.find((price) => price.item === item.item)
        if (itemPrice) {
            total += itemPrice.price * item.quantity
        } else {
            throw new Error(`Price not price for item ${item.element}`)
        }
      });

      return total;
}

module.exports = calculateTotal
