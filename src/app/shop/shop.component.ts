// import { DrinkService } from '../drink.service';
import { DrinkService } from '../drink.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-shop",
  templateUrl: "./shop.component.html",
  styleUrls: ["./shop.component.scss"]
})
export class ShopComponent implements OnInit {
  drinkList;

  constructor(
    private drinkService: DrinkService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.getDrinks();
    // console.log(this.drinkList);
  }

  getDrinks() {
    this.drinkList = this.drinkService.getDrinks();
  }

  total = 0;
  cart = [];

  addCart(drink) {
    this.total += drink.price();
    this.cart.push(drink);
  }
  removeCart(drink, index) {
    this.total -= drink.price();
    this.cart.splice(index, 1);
  }
  imgSrc(drink) {
    return "https://source.unsplash.com/" + drink.img + "/400x225";
  }



//   Bootstrap Modal
open(content) {
    this.modalService.open(content);
  }
}
