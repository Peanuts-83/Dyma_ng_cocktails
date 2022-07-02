import { Ingredient } from './../interfaces/ingredient.interface'
import { BehaviorSubject } from 'rxjs'
import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root'
})
export class PanierService {
    public ingredients$: BehaviorSubject<Ingredient[] | null> = new BehaviorSubject<Ingredient[] | null>(null)

    constructor() { }

    public addPanier(ingredients: Ingredient[]): void {
        const currentValue = this.ingredients$.value

        if (currentValue) {
            const fullArray = [...currentValue, ...ingredients]
            const obj = fullArray.reduce((acc: { [x: string]: number }, value: Ingredient) => {
                if (acc[value.name]) {
                    acc[value.name] += value.quantity
                } else {
                    acc[value.name] = value.quantity
                }
                return acc
            }, {})
            const result = Object.keys(obj).map(key => ({
                name: key,
                quantity: obj[key]
            }))
            this.ingredients$.next(result)
        } else {
            this.ingredients$.next(ingredients)
        }
    }
}
