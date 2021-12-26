import React, { useEffect } from 'react'
import Card from '../components/Card/Card'
import _ from 'lodash'
import { v4 as uuidv4 } from 'uuid'
import useRecipesTools from '../Common/Hooks/useRecipesTools'
import { IRecipe } from '../Common/Interfaces/recipe'

const Home = () => {
    const { fetchRecipes, recipes } = useRecipesTools()

    useEffect(() => {
        fetchRecipes().then()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const displayRecipes = () => {
        return _.map(recipes, (recipe: IRecipe) => {
            return <div className="col-lg-6 mb-5" key={uuidv4()}>
                <Card
                    button={'Voir'}
                    link={recipe.id}
                    description={recipe.description}
                    image={recipe.photo}
                    imageName={recipe.title}
                    title={recipe.title}
                />
            </div>
        })
    }

    return (
        <div>
            <div className="container">
                <div className="col-lg-12 d-flex row">
                    {displayRecipes()}
                </div>
            </div>
        </div>
    )
}
export default Home