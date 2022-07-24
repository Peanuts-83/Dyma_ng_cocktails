import { Ingredient } from './ingredient.interface'

export interface Cocktail {
    _id?: string
    name: string
    img: string
    ingredients: Ingredient[]
    description: string
}
