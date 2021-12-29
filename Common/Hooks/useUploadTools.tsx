import axios from 'axios'
import React from 'react'

function useUploadTools() {
    const onChange = async (formData: object) => {
        const config = {
            headers: { 'content-type': 'multipart/form-data' },
            onUploadProgress: (event: ProgressEvent) => {
                console.log('Current progress:', Math.round((event.loaded * 100) / event.total))
            },
        }

        const response = await axios.post('/api/files/upload', formData, config)

        console.log('response', response.data)
    }

    return {
        onChange
    }
}

export default useUploadTools