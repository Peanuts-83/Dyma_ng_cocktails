import { Ingredient } from './../../shared/interfaces/ingredient.interface'
import { PanierService } from './../../shared/services/panier.service'
import { Cocktail } from '../../shared/interfaces/cocktail.interface'
import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute, ParamMap } from '@angular/router'
import { CocktailService } from 'src/app/shared/services/cocktail.service'

@Component({
    selector: 'app-cocktail-details',
    templateUrl: './cocktail-details.component.html',
    styleUrls: ['./cocktail-details.component.scss']
})
export class CocktailDetailsComponent implements OnInit {
    public cocktail!: Cocktail

    constructor(private panierService: PanierService,
        private cocktailService: CocktailService,
        private activatedRoute: ActivatedRoute) {
            // this.cocktail = this.cocktailService.getCocktail(+this.activatedRoute.snapshot.paramMap.get('index')!)
        }

    public addPanier(): void {
        this.panierService.addPanier(this.cocktail.ingredients)
    }

    ngOnInit(): void {
        this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
            if (paramMap.get('index')) {
                this.cocktail = this.cocktailService.getCocktail(+paramMap.get('index')!)
            }
        })
    }

}
