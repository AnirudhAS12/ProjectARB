import {EventEmitter} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Ingredient} from '../shared/ingredient.model';
import {Recipe} from './recipe.model';
import {Injectable} from '@angular/core';
import {shoppinglistService} from '../shopping-list/shoppinglist.service';
import * as actions from '../../app/shopping-list/store/shopping-list.action';
import {Store} from '@ngrx/store';

@Injectable()

export class recipeServices{
recipeSelected = new EventEmitter<Recipe>();
recipeChanged = new Subject<Recipe[]>(); //using this because when getting recipes a whole new recipe is created by using slice() method. So inorder to inform the changes made to the copy this recipeChanged event or subject is created

    private recipes : Recipe[] = [
        new Recipe('Veg Curry',
        'South Indian Mixed Veg Curry', 
        'http://ksmartstatic.sify.com/cmf-1.0.0/appflow/bawarchi.com/Image/oetr4udedbhaa_bigger.jpg',
        [
            new Ingredient('Onion','10'),
            new Ingredient('Tomato','5'),
            new Ingredient('Carrot','5'),
            new Ingredient('Capsicum','3'),
            new Ingredient('Curry Leaves','10')
         ]),
        new Recipe('Paneer Tikka',
        'Chilli grilled Paneer Tikka', 
        'https://indianhealthyrecipes.com/wp-content/uploads/2014/11/paneer-tikka-in-oven.jpg',
        [
            new Ingredient('Paneer','10'),
            new Ingredient('Onion','10'),
            new Ingredient('Capsicum','3'),
            new Ingredient('Curry Leaves','10')
         ])
        
      ];

      constructor(private shoppingservice : shoppinglistService, private store : Store<any>){}

      getRecipes(){
         return this.recipes.slice();
        
      }

      setRecipes(recipes : Recipe[]){
        this.recipes = recipes;
        // return this.recipes.slice();
        this.recipeChanged.next(this.recipes.slice());
     }

      getRecipebyId(id : number){
        return this.recipes[id];
     }

      // additemstoshopping(ingredients : Ingredient[]){
      //   this.shoppingservice.addingredientstoshopping(ingredients);
      //   this.store.dispatch(new actions.AddIngredients(ingredients));
      // }

      addRecipe(recipe : Recipe){
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice()); //informing that recipes has changed while creating a copy
      }

      updateRecipe(index : number, newRecipe : Recipe){
        this.recipes[index] = newRecipe;
        this.recipeChanged.next(this.recipes.slice()); //informing that recipes has changed while creating a copy
        //this change is listened to in ngOnInit() in recipe where we are dislaying the recipeList by using getRecipes()
      }
      
      saveRecipes(){
        return this.recipes.slice();
      }

      deleteRecipe(index : number){
          this.recipes.splice(index, 1);
          this.recipeChanged.next(this.recipes.slice());
      }
}