import { Dispatch } from 'react'

export interface IProps {
    acceptedFileTypes?: string;
    allowMultipleFiles?: boolean;
    createObjectURL?: string;
    fileInputRef: any;
    formRef: any;
    label: string;
    onChange: (formData: FormData) => void;
    uploadFileName: string;
    setTarget: Dispatch<any>;
    setCreateObjectURL: Dispatch<string>;
}
