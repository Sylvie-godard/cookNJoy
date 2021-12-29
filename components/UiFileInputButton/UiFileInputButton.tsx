import React from 'react'
import { IProps } from '../../Common/Interfaces/uiFileInputButton'
import style from './UiFileInputButton.module.scss'

export const UiFileInputButton: React.FC<IProps> = (props) => {
    const fileInputRef = React.useRef<HTMLInputElement | null>(null)
    const formRef = React.useRef<HTMLFormElement | null>(null)
    const createObjectURL = props.createObjectURL
    const setCreateObjectURL = props.setCreateObjectURL

    const onClickHandler = () => {
        fileInputRef.current?.click()
    }

    const uploadToClient = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const i = event.target.files[0]

            props.setTarget(event.target)
            // @ts-ignore
            setCreateObjectURL(URL.createObjectURL(i))
        }
    }


    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files?.length) {
            return
        }

        uploadToClient(event)
    }

    return (
        <div>
            <form ref={formRef}>
                {
                    createObjectURL !== '' ?
                        <div className={style.imgDownload}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img alt={''} src={createObjectURL}/>
                        </div>
                        : null
                }
                <div className="d-flex">
                    <button type="button" onClick={onClickHandler}>
                        {props.label}
                    </button>
                </div>
                <input
                    accept={props.acceptedFileTypes}
                    multiple={props.allowMultipleFiles}
                    name={props.uploadFileName}
                    onChange={onChangeHandler}
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    type="file"
                />
            </form>
        </div>
    )
}

UiFileInputButton.defaultProps = {
    acceptedFileTypes: '',
    allowMultipleFiles: false,
}
