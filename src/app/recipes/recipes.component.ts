import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { RECIPIES } from '../all-recipes';
import { RecipeService } from '../recipe.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipies: Recipe[] = [];
  selectedRecipe?: Recipe;

  constructor(private recipeService: RecipeService, private cart: CartService) { }

  ngOnInit(): void {
    this.getRecipies();
  }

  onAdd(recipe: Recipe) {
    for (const ingredient of recipe.ingredients) {
      this.cart.addIngredient(ingredient);
    }
  }

  onSelect(recipe: Recipe): void {
    this.selectedRecipe = recipe;
  }

  getRecipies(): void {
    this.recipeService.getRecipies()
        .subscribe(recipies => this.recipies = recipies);
  }

}
