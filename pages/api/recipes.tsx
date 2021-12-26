// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import _ from 'lodash'
import requireDir from 'require-dir'
import path from 'path'

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
    const pathData = path.resolve(__dirname, '..', '..', '..', '..', 'server', 'mock', 'recipes')

    const recipesData = requireDir(pathData)
    const recipes: IRecipe[] = _.map(recipesData, (value, index) => {
        return value
    })


    res.status(200).json({ recipes })
}
