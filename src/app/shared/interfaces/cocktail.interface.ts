import { Ingredient } from './ingredient.interface'

export interface Cocktail {
    name: string
    img: string
    ingredients?: Ingredient[]
    description: string
}
