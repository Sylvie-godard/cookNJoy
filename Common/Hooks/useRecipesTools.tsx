import axios from 'axios'
import { IRecipe, IRecipeCreate } from '../Interfaces/recipe'
import { useState, Dispatch } from 'react'

function useRecipesTools () {
  const [recipes, setRecipes]: [IRecipe[], Dispatch<IRecipe[]>] = useState<IRecipe[]>([])

  const createRecipe = async (data: IRecipeCreate) => {
    try {
      await axios.post('/api/recipes/create', data)
    } catch (errors) {
      console.error(errors)
    }
  }

  const fetchRecipes = async () => {
    try {
      const res = await axios.get('/api/recipes/list')
      const allRecipes: IRecipe[] = res.data.recipes
      setRecipes(allRecipes)
    } catch (errors) {
      console.error(errors)
    }
  }

  return {
    createRecipe,
    fetchRecipes,
    recipes
  }
}

export default useRecipesTools
