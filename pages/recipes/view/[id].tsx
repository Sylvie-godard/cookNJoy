import React, { useEffect, useState } from 'react'
import useRecipesTools from '../../../Common/Hooks/useRecipesTools'
import { useRouter } from 'next/router'
import _ from 'lodash'
import Image from 'next/image'
import { defaultRecipe, IRecipe } from '../../../Common/Interfaces/recipe'
import style from '../recipes.module.scss'
import { v4 as uuidv4 } from 'uuid'

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
        const recipesData = _.filter(recipes, (recipe) => {
            return recipe.id === Number(id)
        })
        const recipe: IRecipe | undefined = _.head(recipesData)
        if (!_.isUndefined(recipe)) {
            setActualRecipe(recipe)
        }
    }

    const displayIngredients = () => {
        return _.map(actualRecipe.ingredients, ingredient => {
            return <li key={uuidv4()}>
                <div className="d-flex justify-content-lg-between">
                    <div>
                        {ingredient.name}
                    </div>
                    <div>
                        {ingredient.quantity} {ingredient.measureType}
                    </div>
                </div>
            </li>
        })
    }

    return (
        <div className={'container'}>
            {isLoad ?
                <div className="d-flex col-12">
                    <div className="p-3 col-6">
                        <div className="flex">
                            <Image
                                alt={actualRecipe.title}
                                className={'mb-5'}
                                height={250}
                                src={'/images/' + actualRecipe.photo}
                                width={400}
                            />
                            <h1>{actualRecipe.title}</h1>
                            <p>{actualRecipe.description}</p>
                        </div>
                    </div>
                    <div className={'p-3 col-6 ' + style.contentRecipe}>
                        <h2>Les ingrédients:</h2>
                        <ul className={style.ingredients + ' col-6 mb-5'}>
                            {displayIngredients()}
                        </ul>
                        <p><strong>Nombre de personne:</strong> {actualRecipe.personsNumber}</p>
                        <p><strong>Nombre de votes:</strong> {actualRecipe.votesNumber}</p>
                        <p><strong>Temps de réalisation:</strong> {actualRecipe.preparationTime} min</p>
                    </div>
                </div>
                : null
            }
        </div>
    )
}

export default RecipeView
