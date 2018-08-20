import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';
import {FormGroup, FormControl, FormArray, Validators} from '@angular/forms';
import {shoppinglistService} from '../../shopping-list/shoppinglist.service';
import { recipeServices} from '../recipe.service';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {
  id : number;
  editMode = false;
  recipeForm:FormGroup;
  constructor(private route : ActivatedRoute, private router : Router,
  private slService : shoppinglistService,private recipeservice : recipeServices ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params : Params) =>{
        this.id=+params['id'];
        this.editMode = params['id']!= null;
        this.initForm();
        // console.log(this.editMode);
      }
    )
  }
  
  onAddIngredients(){
    (<FormArray> this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name' : new FormControl(null,Validators.required),
        'amount' : new FormControl(null,[Validators.required,Validators.pattern(/^[1-9][0-9]*$/)] )
      })
    );
  }

  removeIngredient(index : number){
    (<FormArray> this.recipeForm.get('ingredients')).removeAt(index);
      
  }

  onSubmit(){
    console.log(this.recipeForm);
    if(this.editMode){
      this.recipeservice.updateRecipe(this.id, this.recipeForm.value);
    }else{
      this.recipeservice.addRecipe(this.recipeForm.value)
    }
    this.onCancel();
  }

  onCancel(){
    this.router.navigate(['../'], {relativeTo : this.route})
  }
  initForm(){
    let recipeName='';
    let recipeImagePath='';
    let recipeDescription='';
    let ingredientsArray=new FormArray([]);

    if(this.editMode){
      const recipe=this.recipeservice.getRecipebyId(this.id);
      recipeName=recipe.name;
      recipeImagePath=recipe.imagePath;
      recipeDescription=recipe.description;

      if(recipe['ingredients']){
        for(let ingredient of recipe.ingredients){
        ingredientsArray.push(
          new FormGroup({
            'name' : new FormControl(ingredient.name,Validators.required),
            'amount' : new FormControl(ingredient.amount,[Validators.required,Validators.pattern(/^[1-9][0-9]*$/)])
          })
        );
      }
    }
      }

      this. recipeForm = new FormGroup({
         'name' : new FormControl(recipeName, Validators.required),
         'imagePath' : new FormControl(recipeImagePath,Validators.required),
         'description' : new FormControl(recipeDescription,Validators.required),
         'ingredients' : ingredientsArray

      })

  }

}
