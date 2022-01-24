import React from 'react'
import style from './Card.module.scss'
import Image from 'next/image'
import Link from 'next/link'

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
        <div className={style.card + ' card shadow ' + className}>
            <Image src={'/images/' + image} alt={imageName} width={400} height={250}/>
            <div className={style.cardBody + ' card-body'}>
                <h5 className='card-title'>{title}</h5>
                <p className="card-text">{description}</p>
                <Link href={'/recipes/view/' + link}>
                    <a className="btn btn-primary">{button}</a>
                </Link>
            </div>
        </div>
    )
}

export default Card
