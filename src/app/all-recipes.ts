import { Recipe } from './recipe';
import { Ingredient } from './ingredient';

const IngredientsShu: Ingredient[] = [
    { id: 1, name: 'butter 82.5%', number_measure: '200 g'},
    { id: 2, name: 'sugar', number_measure: '110 g'},
    { id: 3, name: 'wheat flour', number_measure: '250 g'},
    { id: 4, name: 'water', number_measure: '125 g'},
    { id: 5, name: 'salt', number_measure: '10 g'},
    { id: 6, name: 'egg', number_measure: '4-5(210-250 g)'},
]

export const RECIPIES: Recipe[] = [
  { id: 1, name: 'Shu', ingredients: IngredientsShu,
    image_url: 'http://maribela.ru/wp-content/uploads/2017/01/IMG_20170126_124600-833x540.jpg', steps: 'Shu Steps' },
  { id: 2, name: 'Cheesecake', ingredients: IngredientsShu,
    image_url: 'http://maribela.ru/wp-content/uploads/2017/01/IMG_20170126_124600-833x540.jpg', steps: 'Sheesecake Steps' },
  { id: 3, name: 'Briosh', ingredients: IngredientsShu,
    image_url: 'http://maribela.ru/wp-content/uploads/2017/01/IMG_20170126_124600-833x540.jpg', steps: 'Briosh Steps' },
  { id: 4, name: 'Cinnabon' , ingredients: IngredientsShu,
    image_url: 'http://maribela.ru/wp-content/uploads/2017/01/IMG_20170126_124600-833x540.jpg', steps: 'Cinnabon Steps'},
  { id: 5, name: 'Pavlova', ingredients: IngredientsShu,
    image_url: 'http://maribela.ru/wp-content/uploads/2017/01/IMG_20170126_124600-833x540.jpg', steps: 'Pavlova Steps' },
  { id: 6, name: 'Meringue Roll' , ingredients: IngredientsShu,
    image_url: 'http://maribela.ru/wp-content/uploads/2017/01/IMG_20170126_124600-833x540.jpg', steps: 'Meringue Roll Steps'},
  { id: 7, name: 'Orange Kurd' , ingredients: IngredientsShu,
    image_url: 'http://maribela.ru/wp-content/uploads/2017/01/IMG_20170126_124600-833x540.jpg', steps: 'Orange Kudr Steps'},
  { id: 8, name: 'Homemade Marshmallows', ingredients: IngredientsShu,
    image_url: 'http://maribela.ru/wp-content/uploads/2017/01/IMG_20170126_124600-833x540.jpg', steps: 'Homemade Marshmallows Steps' },
  { id: 9, name: 'Pancakes' , ingredients: IngredientsShu,
    image_url: 'http://maribela.ru/wp-content/uploads/2017/01/IMG_20170126_124600-833x540.jpg', steps: 'Pancakes Steps'},
  { id: 10, name: 'Homemade Caramel', ingredients: IngredientsShu,
    image_url: 'http://maribela.ru/wp-content/uploads/2017/01/IMG_20170126_124600-833x540.jpg', steps: 'Homemade Boiled Caramel Steps' }
];