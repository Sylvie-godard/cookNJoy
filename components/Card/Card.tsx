import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import style from './Card.module.scss'

interface Props {
    button: string;
    className?: string;
    description: string;
    image: any;
    imageName?: string;
    link: number;
    title: string;
}

const Card: React.FC<Props> = (
    {
        button,
        className,
        description,
        image,
        imageName,
        link,
        title
    }) => {

    return (
        <div className={`card shadow ${className} ${style.divCard}`}>
            <Image src={'/images/' + image} alt={imageName} width={400} height={250}/>
            <div className={'card-body'}>
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <Link href={'/recipes/view/' + link}>
                    <a className="btn btn-lg btn-primary">{button}</a>
                </Link>
            </div>
        </div>
    )
}

export default Card
