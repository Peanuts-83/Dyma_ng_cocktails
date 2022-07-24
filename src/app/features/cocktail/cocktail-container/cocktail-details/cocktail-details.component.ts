import { Ingredient } from '../../../../shared/interfaces/ingredient.interface';
import { PanierService } from '../../../../shared/services/panier.service';
import { Cocktail } from '../../../../shared/interfaces/cocktail.interface';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CocktailService } from 'src/app/shared/services/cocktail.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-cocktail-details',
    templateUrl: './cocktail-details.component.html',
    styleUrls: ['./cocktail-details.component.scss'],
})
export class CocktailDetailsComponent implements OnInit, OnDestroy {
    public cocktail!: Cocktail;
    public subscription!: Subscription;

    constructor(
        private panierService: PanierService,
        private cocktailService: CocktailService,
        private activatedRoute: ActivatedRoute
    ) {
        // this.cocktail = this.cocktailService.getCocktail(+this.activatedRoute.snapshot.paramMap.get('index')!)
    }

    public addPanier(): void {
        this.panierService.addPanier(this.cocktail.ingredients);
    }

    ngOnInit(): void {
        this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
            if (this.subscription) {
                this.subscription.unsubscribe();
            }

            this.subscription = this.cocktailService
                .getCocktail(+paramMap.get('index')!)
                .subscribe((cocktail: Cocktail) => {
                    this.cocktail = cocktail;
                });
        });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe()
    }
}
