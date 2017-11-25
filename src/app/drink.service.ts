import { Injectable } from '@angular/core';
import { Drink } from './drink';

@Injectable()
export class DrinkService {
  drinkList;

  constructor() {
    this.drinkList = [
      new Drink(
        "1RdpoppRkOA",
        {
          name: "Coffee",
          price: 2
        },
        [
          { name: "Milk", price: 1, count: 0 },
          { name: "Sugar", price: 1, count: 0 }
        ]
      ),
      new Drink(
        "RFHFV7lVQBY",
        { name: "Latte", price: 4 },
        [
          { name: "Chocolate", price: 2, count: 0 },
          { name: "Cream", price: 2, count: 0 }
        ]
      ),
      new Drink(
        "7liDpl93wt4",
        { name: "Tea", price: 2 },
        [
          { name: "Milk", price: 1, count: 0 },
          { name: "Sugar", price: 1, count: 0 }
        ]
      ),
      new Drink(
        "m741tj4Cz7M",
        { name: "Smoothie", price: 5 },
        [
          { name: "Protein", price: 2, count: 0 },
          { name: "Sugar", price: 1, count: 0 }
        ]
      )
    ];
  }

  getDrinks() {
    return this.drinkList;
  }


// function Drink(img, base, modifier) {
// 		this.img = img; // Image URL
// 		this.base = base;
// 		this.modifier = modifier;
// }
// Drink.prototype = {
// 	price: function() {
// 		var modifierPrice = 0;
// 		for(var i=0; i < this.modifier.length; i++) {
// 			if (this.modifier[i].count) {
// 				modifierPrice += this.modifier[i].price * this.modifier[i].count;
// 			}
// 		}
// 		return this.base.price + modifierPrice;
// 	},
// 	checkoutString: function() {
// 		var subString = "";
// 		for(var i=0; i < this.modifier.length; i++) {
// 			if (this.modifier[i].count) {
// 			subString +=" | " + this.modifier[i].count + " " + this.modifier[i].name;
// 			}
// 		}
// 		return this.base.name + subString + ": $" + this.price();
// 	}
// };


}
