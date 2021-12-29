// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import _ from 'lodash'
import requireDir from 'require-dir'
import path from 'path'
import fs from 'fs'
import { IRecipe } from '../../../Common/Interfaces/recipe'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const data = req.body

    const recipesData = requireDir('../../../../../server/mock/recipes')
    const recipes: IRecipe[] = _.map(recipesData, (value, index) => {
        return value
    })

    const count = recipes.length
    const id = count + 1
    const title = data.title
    const filePath = path.resolve( 'server', 'mock', 'recipes', title.concat('.json'))

    data.id = id
    fs.writeFileSync(filePath, JSON.stringify(data))

    res.status(200).json('ok')
}
