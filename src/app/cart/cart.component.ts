import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Ingredient } from '../ingredient';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public cart: Ingredient[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.cart.subscribe(cart => this.cart = cart);
  }

  onAdd(ingredient: Ingredient): void {
    this.cartService.addIngredient(ingredient);
  }

  onDelete(ingredient: Ingredient): void {
    this.cartService.deleteIngredient(ingredient);
  }

}
