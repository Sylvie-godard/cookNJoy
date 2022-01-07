import { IIngredient } from './ingredient'

export interface IRecipe {
    description: string;
    id: number,
    ingredients: IIngredient[];
    personsNumber: number;
    preparationTime: number;
    photo: string;
    votesNumber: number;
    title: string;
}

export interface IRecipeCreate {
    photo: string;
    title: string;
    description: string;
}

export const defaultRecipe = {
    description: '',
    id: 0,
    ingredients: [],
    personsNumber: 0,
    photo: '',
    preparationTime: 0,
    votesNumber: 0,
    title: ''
}
