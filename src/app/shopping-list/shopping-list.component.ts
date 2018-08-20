import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {shoppinglistService} from './shoppinglist.service';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import * as fromShoppingList from '../shopping-list/store/shopping-list.reducers';
import * as actions from '../shopping-list/store/shopping-list.action';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
  
})
export class ShoppingListComponent implements OnInit {
  // ingredients:Ingredient[] ;
  // shoppingListState : Observable<{ingredients:Ingredient[]}>
  shoppingListState: Observable<{ingredients: Ingredient[]}>;
  

  constructor(private shppinglistservice: shoppinglistService,
     private store: Store<fromShoppingList.AppState>) { }
  

  // onIngredientsAdded(ingadded : Ingredient){
  //   this.ingredients.push(ingadded);
  //   // this.shppinglistservice.getIngredients.push(ingadded);
  // }

  ngOnInit() {
    // this.shoppingListState = this.store.select('shoppingList');
    this.shoppingListState = this.store.select('shoppingList');
    // this.shppinglistservice.ingredientsChanged.subscribe(
    //   (ingredients : Ingredient[]) => {
    //     this.ingredients = ingredients;
    //   }
    // )
  }

  onEdit(index : number){
    // this.shppinglistservice.startedEditing.next(index);
    this.store.dispatch(new actions.StartEDit(index));
  }

}
