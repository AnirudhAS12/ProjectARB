import {EventEmitter} from '@angular/core';
import { Subject } from 'rxjs/Subject';
import {Ingredient} from '../shared/ingredient.model';

export class shoppinglistService {
    //    startedEditing = new Subject<number>();
    // ingredientsChanged = new EventEmitter<Ingredient[]>();
    // ingredientsChanged = new Subject<Ingredient[]>();
    
//    private ingredients:Ingredient[] =[
//         new Ingredient('Apples','5'), 
//         new Ingredient('Capsicum','15')
//         ];
  
        // getIngredients(){
        //     return this.ingredients.slice();
        // } //ngrx replaces

        // getIngredientsById(index:number){
        //     return this.ingredients[index];
        // }

        // addIngredient(ingredient : Ingredient){
        //     this.ingredients.push(ingredient);
        //     this.ingredientsChanged.next(this.ingredients);
        // }  //ngrx replaces

        // addingredientstoshopping(ingredients : Ingredient[]){
            // for(let ing of ingredients){
            //     this.addIngredient.push(ing);
            // }

        //     this.ingredients.push(...ingredients);
        //     this.ingredientsChanged.next(this.ingredients.slice());

        // }
        // editIngredientsById(index:number, updatedIngredients : Ingredient){
        //     this.ingredients[index] = updatedIngredients;
        //     this.ingredientsChanged.next(this.ingredients.slice());
            
        // }

        // deleteingredient(index:number){
        //     this.ingredients.splice(index,1);
        //     this.ingredientsChanged.next(this.ingredients.slice());
        // }
}