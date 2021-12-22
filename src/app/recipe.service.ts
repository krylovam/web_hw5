import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Recipe } from './recipe';
import { RECIPIES } from './all-recipes';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  getRecipies(): Observable<Recipe[]> {
    const recipies = of(RECIPIES);
    return recipies;
  }
}
