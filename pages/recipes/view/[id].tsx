import React, { Fragment, useEffect, useState } from 'react'
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
        const recipesData = _.filter(recipes, (recipe) => { return recipe.id === Number(id) })
        const recipe: IRecipe | undefined = _.head(recipesData)
        if (!_.isUndefined(recipe)) {
            setActualRecipe(recipe)
        }
    }

    return (
        <div className={'container'}>
            {isLoad ?
                <Fragment>
                    <h1>{actualRecipe.title}</h1>
                    <div className="flex">
                        <Image src={'/images/' + actualRecipe.photo} alt={actualRecipe.title} width={400} height={250}/>
                        <p><strong>Description:</strong> {actualRecipe.description}</p>
                    </div>

                </Fragment> : null
            }
        </div>
    )
}
export default RecipeView
