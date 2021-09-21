import React, {Dispatch, useEffect, useState} from 'react'
import axios from 'axios'
import Card from '../components/Card/Card'
import _ from 'lodash'

interface IRecipe {
    photo: string;
    title: string;
    description: string;
    id: number
}

const Home = () => {
    const [recipes, setRecipes]: [IRecipe[], Dispatch<IRecipe[]>] = useState([{photo: '', title: '', id: 0, description: ''}])

    useEffect(() => {
        getRecipes().then(result => console.log(result))
    }, [])

    const getRecipes = async () => {
        try {
            const res = await axios.get('/api/recipes')
            const allRecipes: IRecipe[] = res.data.recipes
            setRecipes(allRecipes)
        } catch (errorCategories) {
            return {errorCategories}
        }
    }

    const displayRecipes = () => {
        return _.map(recipes, recipe => {
            return <div className="col-lg-6 mb-5">
                <Card title={recipe.title} imageName={recipe.title} image={recipe.photo} button={'Voir'} description={recipe.description}/>
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