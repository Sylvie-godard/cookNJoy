export interface IRecipe {
    photo: string;
    title: string;
    description: string;
    id: number
}

export interface IRecipeCreate {
    photo: string;
    title: string;
    description: string;
}

export const defaultRecipe = {
    photo: '',
    title: '',
    description: '',
    id: 0
}
