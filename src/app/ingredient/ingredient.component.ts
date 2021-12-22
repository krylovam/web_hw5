import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../ingredient';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {

  ingredients: Ingredient[] = [];
  selectedIngredient?: Ingredient;

  constructor() { }

  ngOnInit(): void {
  }

}
