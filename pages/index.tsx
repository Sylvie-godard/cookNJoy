import React, { useEffect } from 'react'
import Card from '../components/Card/Card'
import _ from 'lodash'
import { v4 as uuidv4 } from 'uuid'
import useRecipesTools from '../Common/Hooks/useRecipesTools'

const Home = () => {
    const { fetchRecipes, recipes } = useRecipesTools()

    useEffect(() => {
        fetchRecipes().then()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const displayRecipes = () => {
        return _.map(recipes, recipe => {
            return <div className="col-lg-6 mb-5" key={uuidv4()}>
                <Card title={recipe.title} imageName={recipe.title} image={recipe.photo} button={'Voir'}
                      description={recipe.description}/>
            </div>
        })
    }

    return (
        <div>
            <div className="container">
                <div className="col-lg-12 d-flex row">
                    {displayRecipes()}
                    {displayRecipes()}
                </div>
            </div>
        </div>
    )
}
export default Home