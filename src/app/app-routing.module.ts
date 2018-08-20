import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipesComponent} from '../app/recipes/recipes.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RecipeStarterComponent} from '../app/recipes/recipe-starter/recipe-starter.component';
import {RecipeDetailComponent} from '../app/recipes/recipe-detail/recipe-detail.component';
import {EditRecipeComponent} from './recipes/edit-recipe/edit-recipe.component';
import { SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component'
import {RegisterComponent} from './auth/register/register.component';

const AppRoutes : Routes =[
    {path:'signup', component : SignupComponent},
    {path:'signin', component : SigninComponent},
    {path:'register', component : RegisterComponent},
    {path:'', redirectTo:'/recipes', pathMatch:'full'},    
    {path:'recipes', component : RecipesComponent, children :[
        {path:'', component : RecipeStarterComponent},
        {path:'new', component:EditRecipeComponent},
        {path:':id', component : RecipeDetailComponent},
        {path:':id/edit', component : EditRecipeComponent}, 
    ]},
    
    {path:'shopping-list', component : ShoppingListComponent}
];

@NgModule({
     imports: [RouterModule.forRoot(AppRoutes)],
    exports: [RouterModule]
    
})

export class AppRoutingModule{

}