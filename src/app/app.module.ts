import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import {shoppinglistService} from '../app/shopping-list/shoppinglist.service';
import {recipeServices} from '../app/recipes/recipe.service';
import {DataStorageService} from '../app/shared/datastorage.service';
import {AuthService} from '../app/auth/auth.service';
import { RecipeStarterComponent } from './recipes/recipe-starter/recipe-starter.component';
import { EditRecipeComponent } from './recipes/edit-recipe/edit-recipe.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { RegisterComponent } from './auth/register/register.component';
import {shoppingListReducer} from '../app/shopping-list/store/shopping-list.reducers';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeStarterComponent,
    EditRecipeComponent,
    SignupComponent,
    SigninComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    // StoreModule.forRoot({shoppinglist : shoppingListReducer})
    StoreModule.forRoot({shoppingList: shoppingListReducer})
    
  ],
  providers:[recipeServices,shoppinglistService,DataStorageService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
