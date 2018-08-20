import { Component, OnInit , Input} from '@angular/core';
// import {EventEmitter, } from '@angular/core';
import {Recipe} from '../../recipe.model';
import {recipeServices} from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe : Recipe;
  @Input() index : number;
  // @Output() recipeSelectedis = new EventEmitter<void>();
  constructor(private recipeservice : recipeServices) { }
  

  // onrecipeSelect(){
  //   this.recipeservice.recipeSelected.emit(this.recipe);
  // }
  ngOnInit() {
  }

}
