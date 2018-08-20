import { Component, OnInit ,Output,EventEmitter, OnDestroy } from '@angular/core';
import {Recipe} from '../recipe.model';
import {recipeServices} from '../recipe.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  // @Output() recipethatselected = new EventEmitter<Recipe>();
  recipes : Recipe[];
  subscription : Subscription;

  constructor(private recipeser :recipeServices,
  private route: ActivatedRoute, private router : Router) { }

  // recipeSelectedwas(recipee:Recipe){
  // this.recipethatselected.emit(recipee);
  // }

  ngOnInit() {
    this.subscription=this.recipeser.recipeChanged.subscribe(
      (recipes : Recipe[]) => {
        this.recipes = recipes;
      }
    )
    this.recipes = this.recipeser.getRecipes();
  }

  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo : this.route})
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
