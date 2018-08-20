import { Component, OnInit, Input } from '@angular/core';
import {Recipe} from '../recipe.model';
import {recipeServices} from '../recipe.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import * as actions from '../../shopping-list/store/shopping-list.action';
import * as fromShoppingList from '../../shopping-list/store/shopping-list.reducers';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
//  @Input() recipe : Recipe;

recipe : Recipe;
id:number;

  constructor(private recipeservice : recipeServices, 
  private route : ActivatedRoute, private router : Router,
private store :Store<fromShoppingList.AppState>) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params : Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeservice.getRecipebyId(this.id);
      }
    )
  }
  
  deleteRecipe(){
    this.recipeservice.deleteRecipe(this.id);
    this.router.navigate(['/recipes'], {relativeTo : this.route})
  }
  editRecipe(){
    // this.router.navigate(['../', this.id, 'edit'],{relativeTo : this.route} );
    this.router.navigate(['edit'], {relativeTo : this.route});
  }
  addtoshoppinglist(){
    // this.recipeservice.additemstoshopping(this.recipe.ingredients);
      this.store.dispatch(new actions.AddIngredients(this.recipe.ingredients));
  }

}
