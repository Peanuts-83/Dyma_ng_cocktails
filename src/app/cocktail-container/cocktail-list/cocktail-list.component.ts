
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Cocktail } from 'src/app/interfaces/cocktail.interface'

@Component({
    selector: 'app-cocktail-list',
    templateUrl: './cocktail-list.component.html',
    styleUrls: ['./cocktail-list.component.scss']
})
export class CocktailListComponent implements OnInit {
    @Input() cocktails!: Cocktail[]
    @Output() cocktailEvent: EventEmitter<Cocktail> = new EventEmitter()

    cocktailChoice!: Cocktail
    showCocktail(cocktail: Cocktail) {
        this.cocktailChoice = cocktail
        this.cocktailEvent.emit()
    }

    constructor() { }

    ngOnInit(): void {
    }

}
