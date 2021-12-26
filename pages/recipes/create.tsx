import React, { ChangeEvent, ChangeEventHandler, useState } from 'react'
import useRecipesTools from '../../Common/Hooks/useRecipesTools'

function CreateRecipe () {
    const { createRecipe } = useRecipesTools()
    const [description, setDescription] = useState<string>('')
    const [photo, setPhoto] = useState<string>('')
    const [title, setTitle] = useState<string>('')

    const handleChange = (event: ChangeEvent) => {
        event.preventDefault()
        const id = event.target.id
        const value = event.currentTarget.value

        switch (id) {
            case 'description':
                setDescription(value)
                break
            case 'titleRecipe':
                setTitle(value)
                break
        }
    }

    const handleSubmit = async (event: ChangeEvent) => {
        event.preventDefault()
        const data = {
            description,
            title,
            photo: ''
        }

        console.log({ data })
        await createRecipe(data)
    }

    return (
        <div className={'container'}>
            <form onSubmit={(event) => {handleSubmit(event).then()}}>
                <div className="form-group">
                    <label htmlFor="titleRecipe">
                        Titre
                    </label>
                    <input
                        onChange={(event) => {handleChange(event)}}
                        className="form-control"
                        id="titleRecipe"
                        type="text"
                        placeholder="Titre"
                    />
                </div>
                <div className="form-group mt-5 mb-5">
                    <label htmlFor="description">Description</label>
                    <input
                        className="form-control"
                        id="description"
                        onChange={(event) => {handleChange(event)}}
                        placeholder="Description"
                        type="text"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Créer recette</button>
            </form>
        </div>
    )
}

export default CreateRecipe
