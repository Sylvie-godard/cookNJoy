// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import _ from 'lodash'

const recipes = require('../../server/recipes.json')

interface IRecipe {
    photo: string;
    title: string;
    description: string;
    id: number
}

type Data = {
    recipes: IRecipe
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json({recipes})
}
