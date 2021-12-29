import React, { useState } from 'react'
import useRecipesTools from '../../Common/Hooks/useRecipesTools'
import { UiFileInputButton } from '../../components/UiFileInputButton/UiFileInputButton'
import useUploadTools from '../../Common/Hooks/useUploadTools'
import _ from 'lodash'

function CreateRecipe(this: any) {
    const { onChange } = useUploadTools()
    const { createRecipe } = useRecipesTools()
    const fileInputRef = React.useRef<HTMLInputElement | null>(null)
    const formRef = React.useRef<HTMLFormElement | null>(null)
    const [createObjectURL, setCreateObjectURL] = useState('')
    const [description, setDescription] = useState<string>('')
    const [target, setTarget] = useState<any>(null)
    const [title, setTitle] = useState<string>('')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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

    const confirmDownloadAndGetPhoto = () => {
        if (!_.isNull(target)) {
            const targetValue = target.value
            const defaultPath = 'C:\\fakepath\\'
            const photoName = _.replace(targetValue, defaultPath, '')

            const formData = new FormData()
            Array.from(target.files).forEach((file: any) => {
                formData.append(target.name, file)
            })

            onChange(formData).then()
            formRef.current?.reset()
            setCreateObjectURL('')

            return photoName
        }

        return ''
    }

    const handleSubmit = async () => {
        const photoName = confirmDownloadAndGetPhoto()

        const data = {
            description,
            title,
            photo: photoName
        }

        await createRecipe(data)
    }

    return (
        <div className={'container'}>
            <div className="form-group">
                <label htmlFor="titleRecipe">
                    Titre
                </label>
                <input
                    onChange={(event) => {
                        handleChange(event)
                    }}
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
                    onChange={(event) => {
                        handleChange(event)
                    }}
                    placeholder="Description"
                    type="text"
                />
            </div>
            <div className="form-group mb-5">
                <UiFileInputButton
                    createObjectURL={createObjectURL}
                    fileInputRef={fileInputRef}
                    formRef={formRef}
                    label="Télécharger l'image"
                    onChange={onChange}
                    setCreateObjectURL={setCreateObjectURL}
                    setTarget={setTarget}
                    uploadFileName="theFiles"
                />
            </div>
            <button
                className="btn btn-primary"
                onClick={() => {
                    handleSubmit().then()
                }}
                type="button"
            >
                Créer recette
            </button>
        </div>
    )
}

export default CreateRecipe
