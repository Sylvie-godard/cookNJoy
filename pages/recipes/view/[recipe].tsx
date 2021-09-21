import React from 'react'
import { useRouter } from 'next/router'

const Create = () => {
    const { route, query} = useRouter()
    return (
        <div className={'container'}>
            {query.recipe}
        </div>
    )
}

export default Create
