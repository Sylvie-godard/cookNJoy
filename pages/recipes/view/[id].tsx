import React, { useEffect, useState } from 'react'
import useRecipesTools from '../../../Common/Hooks/useRecipesTools'
import { useRouter } from 'next/router'
import _ from 'lodash'
import Image from 'next/image'
import { IRecipe, defaultRecipe } from '../../../Common/Interfaces/recipe'

const RecipeView = () => {
    const router = useRouter()
    const [actualRecipe, setActualRecipe] = useState<IRecipe>(defaultRecipe)
    const [isLoad, setIsLoad] = useState<boolean>(false)
    const { fetchRecipes, recipes } = useRecipesTools()
    const { id } = router.query

    useEffect(() => {
        fetchRecipes().then()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        LoadRecipe()
        if (actualRecipe !== defaultRecipe) {
            setIsLoad(true)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [actualRecipe, recipes])

    const LoadRecipe = () => {
        // @ts-ignore
        const name: string = _.upperFirst(_.camelCase(id))
        const recipe: IRecipe = _.get(recipes, name, null)
        if (!_.isNull(recipe)) {
            setActualRecipe(recipe)
        }
    }

    return (
        <div>
            {isLoad ?
                <div>
                    <Image src={'/images/' + actualRecipe.photo} alt={actualRecipe.title} width={400} height={250}/>
                </div> : null
            }
        </div>
    )
}
export default RecipeView
