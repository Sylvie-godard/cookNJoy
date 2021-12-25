// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
// import _ from 'lodash'
// import requireDir from 'require-dir'

interface IRecipe {
    photo: string;
    title: string;
    description: string;
    id: number
}

type Data = {
    recipes: IRecipe[]
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    // const recipesData = requireDir('../../../../server/mock/recipes')
    // const recipes: IRecipe[] = _.map(recipesData, (value, index) => {
    //     return value
    // })

    const recipes = [
        {
            description: 'Chocolate bar gingerbread gummi bears jujubes cake biscuit cookie tiramisu. Lemon drops powder chocolate gummi bears lollipop candy toffee cupcake. Cupcake browni oat cake chocolate bar halvah soufflé bonbon jelly beans danish.',
            id: 1,
            photo: 'burger-rossini.jpg',
            title: 'Hamburger boeuf 360g'
        },
        {
            description: 'Jelly beans brownie danish. Liquorice icing sesame snaps bear claw cupcake fruitcake soufflé chocolate cake sweet roll.',
            id: 4,
            photo: 'muffin-myrtille.jpg',
            title: 'Muffin à la myrtille'
        },
        {
            description: 'Pudding muffin jelly beans dragée wafer. Sweet roll powder pastry topping tootsie roll candy. Brownie halvah cookie chocolate cake sugar plum sesame snaps muffin.',
            id: 2,
            photo: 'pate-carbo.jpg',
            title: 'Pâtes carbonara'
        },
        {
            description: 'Tiramisu lemon drops bear claw wafer biscuit topping cookie tootsie roll. Bonbon chupa chups carrot cake marshmallow brownie.',
            id: 3,
            photo: 'salade-cezar.jpeg',
            title: 'Salade cézar'
        }
    ]

    res.status(200).json({ recipes })
}
