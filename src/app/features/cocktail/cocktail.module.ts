import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CocktailContainerComponent } from './cocktail-container/cocktail-container.component';
import { CocktailDetailsComponent } from './cocktail-container/cocktail-details/cocktail-details.component';
import { CocktailFormComponent } from './cocktail-container/cocktail-form/cocktail-form.component';
import { CocktailListComponent } from './cocktail-container/cocktail-list/cocktail-list.component';

import { COCKTAIL_ROUTES } from './cocktail.routes'
import { SharedModule } from 'src/app/shared/modules/shared.module'

@NgModule({
    declarations: [
        CocktailListComponent,
        CocktailDetailsComponent,
        CocktailFormComponent,
        CocktailContainerComponent,
    ],
    imports: [SharedModule, ReactiveFormsModule, FormsModule, RouterModule.forChild(COCKTAIL_ROUTES)],
})
export class CocktailModule {}
