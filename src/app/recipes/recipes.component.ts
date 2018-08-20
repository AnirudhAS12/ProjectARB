import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe.model';
import {recipeServices} from './recipe.service';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers :[recipeServices]
})
export class RecipesComponent implements OnInit {
  recipedisplayed :Recipe;
  constructor(private recipeservice : recipeServices) { }
  

  ngOnInit() {
    this.recipeservice.recipeSelected.subscribe(
      (recipe : Recipe) => {
        this.recipedisplayed = recipe;
      }
    );
  }
  
  // recipeDisplay(recipetobedisplayed){
  //   this.recipedisplayed = recipetobedisplayed;
  // }


}
