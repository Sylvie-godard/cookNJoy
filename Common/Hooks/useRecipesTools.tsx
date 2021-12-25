import axios from 'axios'
import { IRecipe } from '../Interfaces/recipe'
import { useState, Dispatch } from 'react'

function useRecipesTools () {
  const [recipes, setRecipes]: [IRecipe[], Dispatch<IRecipe[]>] = useState<IRecipe[]>([])

  const fetchRecipes = async () => {
    try {
      const res = await axios.get('/api/recipes')
      const allRecipes: IRecipe[] = res.data.recipes
      setRecipes(allRecipes)
    } catch (errors) {
      console.error(errors)
    }
  }

  return {
    fetchRecipes,
    recipes
  }
}

export default useRecipesTools
