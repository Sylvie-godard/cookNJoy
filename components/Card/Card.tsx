import React from 'react'
import style from './Card.module.scss'
import Image from 'next/image'

interface Props {
    className?: string;
    image: any;
    imageName?: string;
    title: string;
    description: string;
    button: string
}

const Card: React.FC<Props> = (
    {
        className,
        image,
        imageName,
        title,
        description,
        button
    }) => {

    return (
        <div className={style.card + ' ' + className}>
            <Image src={'/images/' + image} alt={imageName} width={400} height={250}/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href="#" className="btn btn-primary">{button}</a>
            </div>
        </div>
    )
}

export default Card
