import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { Cocktail } from '../interfaces/cocktail.interface'

@Injectable({
    providedIn: 'root'
})
export class CocktailService {

    public cocktails$: BehaviorSubject<Cocktail[]> = new BehaviorSubject<Cocktail[]>([
        {
            name: 'Mojito',
            img: 'https://www.hangoverweekends.co.uk/media/15505/mojito.jpg?width=500&height=375',
            ingredients: [
                { name: "Rhum Appleton", quantity: 2 },
                { name: "quartiers de lime", quantity: 4 },
                { name: "feuilles de menthe", quantity: 10 },
                { name: "Glace", quantity: 1 },
                { name: "Club soda", quantity: .5 }],
            description: 'Au fond d’un verre de type Highball, piler les quartiers de lime, les 10 feuilles de menthe et le sirop simple. Verser ensuite la glace et les 2 oz de rhum, puis secouer au shaker. Verser dans un verre puis ajouter 60 ml de soda.'
        }, {
            name: 'Pina Colada',
            img: 'https://www.hangoverweekends.co.uk/media/15501/pina_colada_cocktail.png?width=243&height=350',
            ingredients: [
                { name: "Rhum blanc", quantity: 2 },
                { name: "Rhum ambré", quantity: 2 },
                { name: "jus d'ananas", quantity: 12 },
                { name: "lait de coco", quantity: 4 }],
            description: "Dans un blender (mixer), versez les ingrédients avec 5 ou 6 glaçons et mixez le tout. C'est prêt ! Versez dans le verre et dégustez. Peut aussi se réaliser au shaker si c'est juste pour une personne."
        }, {
            name: 'Cosmopolitan',
            img: 'https://www.hangoverweekends.co.uk/media/15507/gallery-1430408520-dmg-cosmopolitan-cocktail-001.jpg?width=330px&height=407px',
            ingredients: [
                { name: "vodka aromatisée au citron", quantity: 1 },
                { name: "liqueur Cointreau", quantity: 0.5 },
                { name: "jus de lime", quantity: 0.25 },
                { name: "jus de canneberges", quantity: 1.5 },],
            description: 'Placer tous les ingrédients dans un shaker de type Boston et remplir aux trois quarts de glace. Shaker vigoureusement pendant 8 à 10 secondes et filtrer à l’aide d’un tamis dans un verre à martini préalablement refroidi. Décorer d’un quartier de lime.'
        }
    ])

    constructor() {}

    getCocktail(index: number): Cocktail {
        const cocktails = this.cocktails$.value
        // console.log(cocktails[index]);
        return cocktails[index]
    }

    addCocktail(cocktail: Cocktail): void {
        const cocktails = this.cocktails$.value
        this.cocktails$.next([...cocktails, cocktail])
        console.log('Cocktail added successfully!');

    }

}
