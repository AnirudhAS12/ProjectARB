import {Action} from '@ngrx/store';
import {Ingredient} from '../../shared/ingredient.model';
// import {AddIngredient} from './shopping-list.action';
import * as actions from './shopping-list.action';

// const ADD_INGREDIENT = 'ADD_INGREDIENT';

export interface AppState{
    shoppingList : State
}

export interface State{
    ingredients : Ingredient[];
    editedIngredient : Ingredient;
    editedIngredientIndex : number;

}
const initialState : State={
    ingredients : [
        new Ingredient('Apples','5'), 
        new Ingredient('Capsicum','15')
        ] ,//object value via colon
        editedIngredient : null,
        editedIngredientIndex : -1
};


export function shoppingListReducer(state = initialState ,action : actions.ShoppingListActions ){
    switch(action.type){


        case actions.ADD_INGREDIENT : 
            return {
                ...state, 
                ingredients:[...state.ingredients, action.payload]
            }


        case actions.ADD_INGREDIENTS :
        return{
            ...state,
            ingredients : [...state.ingredients , ...action.payload]
        }


        case actions.UPDATE_INGREDIENT:
        const tbeing = state.ingredients[state.editedIngredientIndex];
        const updateding = {...tbeing,...action.payload};
        const ingredients = [...state.ingredients];
        ingredients[state.editedIngredientIndex] =  updateding;
        return{
            ...state,
            ingredients : ingredients,
            editedIngredient : null,
            editedIngredientIndex : -1
        }


        case actions.DELETE_INGREDIENTS :
        const oldIngredients = [...state.ingredients];
        oldIngredients.splice(state.editedIngredientIndex,1);
        return{
            ...state,
                ingredients : oldIngredients,
                editedIngredient : null,
                editedIngredientIndex : -1
        }

        case actions.START_EDIT :
         const editedIngredient = {...state.ingredients[action.payload]};
        //  const editedIngredientIndex = action.payload;
        return{
            ...state,
            editedIngredient : editedIngredient,
            editedIngredientIndex : action.payload
               
        }

        case actions.STOP_EDIT :
        
       return{
           ...state,
           editedIngredient : null
           editedIngredientIndex :-1
              
       }



        default :
            return state;  
        
    }
}