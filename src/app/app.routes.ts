import { CocktailFormComponent } from './features/cocktail/cocktail-container/cocktail-form/cocktail-form.component';

import { Routes } from '@angular/router';
import { CocktailContainerComponent } from './features/cocktail/cocktail-container/cocktail-container.component';
import { CocktailDetailsComponent } from './features/cocktail/cocktail-container/cocktail-details/cocktail-details.component';
import { PanierContainerComponent } from './features/panier/panier-container/panier-container.component';

export const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'cocktails', pathMatch: 'full' },
    {
        path: 'cocktails',
        // LOADING DYNAMIQUE par callabck
        loadChildren: () =>
            import('./features/cocktail/cocktail.module').then(
                (m) => m.CocktailModule
            ),
    },
    {
        path: 'panier',
        loadChildren: () =>
            import('./features/panier/panier.module').then(
                (m) => m.PanierModule
            ),
    },
];
