export interface IRecipe {
    photo: string;
    title: string;
    description: string;
    id: number
}

export const defaultRecipe = {
    photo: '',
    title: '',
    description: '',
    id: 0
}
