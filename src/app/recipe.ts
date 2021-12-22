import { Ingredient } from "./ingredient";

export interface Recipe {
    id: number;
    name: string;
    ingredients: Ingredient[];
    image_url: string;
    steps: string;
}

