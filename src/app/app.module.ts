// Modules
import { NgModule, Component } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule, Routes } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'
// Routes
import { APP_ROUTES } from './app.routes'
// Composants
import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component'
import { CocktailDetailsComponent } from './cocktail-container/cocktail-details/cocktail-details.component'
import { CocktailContainerComponent } from './cocktail-container/cocktail-container.component'
import { CocktailListComponent } from './cocktail-container/cocktail-list/cocktail-list.component';
import { SelectedDirective } from './shared/directives/selected.directive';
import { PanierContainerComponent } from './panier-container/panier-container.component';
import { IngredientListComponent } from './ingredient-list/ingredient-list.component';
import { CocktailFormComponent } from './cocktail-container/cocktail-form/cocktail-form.component'



@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        CocktailListComponent,
        CocktailDetailsComponent,
        CocktailContainerComponent,
        SelectedDirective,
        PanierContainerComponent,
        IngredientListComponent,
        CocktailFormComponent,
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        RouterModule.forRoot(APP_ROUTES)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
