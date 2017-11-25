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
}
