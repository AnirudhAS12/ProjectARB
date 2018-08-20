import { Component, OnInit,OnDestroy,Output, EventEmitter, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';
import {Ingredient} from '../../shared/ingredient.model';
import {shoppinglistService} from '../shoppinglist.service';
import {Store} from '@ngrx/store';
import * as actions from '../store/shopping-list.action';
import * as fromShoppingList from '../store/shopping-list.reducers';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit ,OnDestroy {
  // itemName='';
  // itemAmount='';
  // @Output() addeditems = new EventEmitter<Ingredient>();
  subscription : Subscription;
  editMode=false;
  // editedItemIndex : number;
  editedIngredient : Ingredient;
  @ViewChild('f') shopform :NgForm;

  constructor(private slservice : shoppinglistService, private store : Store<fromShoppingList.AppState>) { }

  ngOnInit() {
    this.subscription = this.store.select('shoppingList').subscribe(
        data =>{
          if(data.editedIngredientIndex > -1){
            this.editedIngredient = data.editedIngredient;
            this.shopform.setValue({
              item_name : this.editedIngredient.name,
              item_amount : this.editedIngredient.amount 
            });
            this.editMode=true
          }else{
            this.editMode=false
          }
        }
    )
    
    // this.subscription = this.slservice.startedEditing.subscribe(
    //   (index : number) =>{
    //     this.editMode=true;
    //     this.editedItemIndex=index;
    //     this.editedIngredient= this.slservice.getIngredientsById(index);
    //     this.shopform.setValue({
    //       item_name : this.editedIngredient.name,
    //       item_amount : this.editedIngredient.amount 
    //     })
    //   }
    // )
  }
 ngOnDestroy(){
   this.subscription.unsubscribe();
 }
  onAdd(form : NgForm){
    const value=form.value;
    // console.log(this.itemName, this.itemAmount);
    // const ingredientsAdded = new Ingredient(this.itemName, this.itemAmount);
    const ingredientsAdded = new Ingredient(value.item_name, value.item_amount);
    if(this.editMode){
      // this.slservice.editIngredientsById(this.editedItemIndex,ingredientsAdded );
      this.store.dispatch(new actions.UpdateIngredient( ingredientsAdded));
    }else{
    // this.slservice.addIngredient(ingredientsAdded);
    // this.addeditems.emit(ingredientsAdded);
    this.store.dispatch(new actions.AddIngredient(ingredientsAdded)); //ngrx
    }
    this.editMode=false;
    form.reset();
  }

  clearDetails(){
    this.shopform.reset();
    this.editMode=false;
  }

  deleteItem(){
    // this.slservice.deleteingredient(this.editedItemIndex);
    this.store.dispatch(new actions.DeleteIngredients());
    this.clearDetails();
  }

}
