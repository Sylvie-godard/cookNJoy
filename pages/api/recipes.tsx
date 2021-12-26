// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import requireDir from 'require-dir'

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
    const recipes = requireDir('../../../../server/mock/recipes')

    res.status(200).json({ recipes })
}
