
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import { Recipe} from '../recipes/recipe.model';
import 'rxjs/Rx';
import {recipeServices} from '../recipes/recipe.service';

@Injectable()
export class DataStorageService{
    constructor(private http: Http, private recipeService : recipeServices){}
    
    storeData(){
    return this.http.put('https://recipe-book-4dcb9.firebaseio.com/recipes.json',
     this.recipeService.getRecipes());
    }

    fetchData(){
       this.http.get('https://recipe-book-4dcb9.firebaseio.com/recipes.json')
       .map(
           (response : Response)=>{
            const recipes : Recipe[] = response.json();
            for(let recipe of recipes){
                if(!recipe['ingredients']){
                    recipe['ingredients'] =[];
                }
            }
            return recipes;
           }
       )
       .subscribe(
            (recipes : Recipe[]) =>{
                console.log('fetching...');
                // const recipes : Recipe[] = response.json();
                this.recipeService.setRecipes(recipes);
                console.log(recipes);
            }
        )
    }
}