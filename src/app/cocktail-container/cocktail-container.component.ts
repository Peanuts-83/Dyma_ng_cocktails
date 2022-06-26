import { CocktailService } from './../shared/cocktail.service'
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core'
import { Cocktail } from '../shared/interfaces/cocktail.interface'
import { CocktailListComponent } from './cocktail-list/cocktail-list.component'
import { Subscription } from 'rxjs'

@Component({
    selector: 'app-cocktail-container',
    templateUrl: './cocktail-container.component.html',
    styleUrls: ['./cocktail-container.component.scss']
})
export class CocktailContainerComponent implements OnInit, OnDestroy {
    cocktails: Cocktail[] = []
    selectedCocktail!: Cocktail
    subscription: Subscription = new Subscription()

    // @ViewChild('cocktailList') el!: CocktailListComponent


    constructor(private cocktailService: CocktailService) { }

    ngOnInit(): void {
        this.subscription.add(
            this.cocktailService.cocktails$.subscribe((cocktails: Cocktail[]) => {
                this.cocktails = cocktails
            }))

        this.subscription.add(
            this.cocktailService.selectedCocktail$.subscribe((selectedCocktail: Cocktail) => {
                this.selectedCocktail = selectedCocktail
            })
        )
    }

    chooseCocktail(index: number): void {
        this.cocktailService.chooseCocktail(index)
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe()
    }

}
