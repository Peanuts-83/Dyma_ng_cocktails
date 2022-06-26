import { Component, OnInit, ViewChild } from '@angular/core'
import { Cocktail } from '../interfaces/cocktail.interface'
import { CocktailListComponent } from './cocktail-list/cocktail-list.component'

@Component({
    selector: 'app-cocktail-container',
    templateUrl: './cocktail-container.component.html',
    styleUrls: ['./cocktail-container.component.scss']
})
export class CocktailContainerComponent implements OnInit {
    
    cocktails: Cocktail[] = [
        {
            name: 'Mojito',
            img: 'https://www.hangoverweekends.co.uk/media/15505/mojito.jpg?width=500&height=375',
            ingredients: ["2 oz de rhum Appleton",
                "4 quartiers de lime",
                "10 feuilles de menthe",
                "3/4 oz de sirop simple",
                "Glace",
                "Club soda"],
            description: 'Au fond d’un verre de type Highball, piler les quartiers de lime, les 10 feuilles de menthe et le sirop simple. Verser ensuite la glace et les 2 oz de rhum, puis secouer au shaker. Verser dans un verre puis ajouter 60 ml de soda.'
        }, {
            name: 'Pina Colada',
            img: 'https://www.hangoverweekends.co.uk/media/15501/pina_colada_cocktail.png?width=243&height=350',
            ingredients: ["2 cl de Rhum blanc",
                "2 cl de Rhum ambré",
                "12 cl de jus d'ananas",
                "4 cl de lait de coco"],
            description: "Dans un blender (mixer), versez les ingrédients avec 5 ou 6 glaçons et mixez le tout. C'est prêt ! Versez dans le verre et dégustez. Peut aussi se réaliser au shaker si c'est juste pour une personne."
        }, {
            name: 'Cosmopolitan',
            img: 'https://www.hangoverweekends.co.uk/media/15507/gallery-1430408520-dmg-cosmopolitan-cocktail-001.jpg?width=330px&height=407px',
            ingredients: ["1 oz (30 ml) d’une base de vodka aromatisée au citron",
                "0, 5 oz(15 ml) de liqueur Cointreau",
                "0, 25 oz(8 ml) de jus de lime fraîchement pressé",
                "1, 5 oz(45 ml) de jus de canneberges"],
            description: 'Placer tous les ingrédients dans un shaker de type Boston et remplir aux trois quarts de glace. Shaker vigoureusement pendant 8 à 10 secondes et filtrer à l’aide d’un tamis dans un verre à martini préalablement refroidi. Décorer d’un quartier de lime.'
        }
    ]

    selectedCocktail!: Cocktail

    @ViewChild('cocktailList') el!: CocktailListComponent

    chooseCocktail() {
        this.selectedCocktail = this.el.cocktailChoice
    }

    constructor() { }

    ngOnInit(): void {
        this.selectedCocktail = this.cocktails[0]
    }

}
