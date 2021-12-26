// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import _ from 'lodash'
import requireDir from 'require-dir'
import path from 'path'
import fs from 'fs'

interface IRecipe {
    photo: string;
    title: string;
    description: string;
    id: number
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const body = req.body
    const recipesData = requireDir('../../../../../server/mock/recipes')
    const recipes: IRecipe[] = _.map(recipesData, (value, index) => {
        return value
    })

    // le titre en upperFirst + camel case => titre .json
    // pour l'id count de tous les recipes + 1
    // description + title
    // photo = image vide

    // const id = recipes.length + 1
    // const title = body.title
    // const description = body.description

    const id = 12
    const title = 'litchee'
    const description = 'body.description'
    const filePath = path.resolve( 'server', 'mock', 'recipes', title.concat('.json'))

    //C:\\dev\\src\\mpec\\cookNJoy\\
    const data = {
        id, title, description, photo: ''
    }

    console.log({ filePath })
    fs.writeFileSync(filePath, JSON.stringify(data))

    res.status(200).json({ recipes })
}
