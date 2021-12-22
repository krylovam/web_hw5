import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of } from 'rxjs';
import { Ingredient } from './ingredient';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _cart: BehaviorSubject<Ingredient[]> = new BehaviorSubject([] as Ingredient[]);
  public readonly cart: Observable<Ingredient[]> = this._cart.asObservable();

  addIngredient(ingredient: Ingredient) {
    const cart = [...this._cart.getValue()];
    cart.push(ingredient);
    this._cart.next(cart);
  }

  deleteIngredient(ingredient: Ingredient) {
    let cart = [...this._cart.getValue()];
    cart = cart.filter(elem => elem != ingredient);
    this._cart.next(cart);
  }
  
  constructor() { }
}
