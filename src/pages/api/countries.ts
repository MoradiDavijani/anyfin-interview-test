import type { NextApiRequest, NextApiResponse } from 'next'
import { getCountriesByName } from 'src/services/countries'
import type { Countries } from 'src/types/countries'

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const countries: Array<Countries> = await getCountriesByName(
    req.query.name.toString()
  )

  res.status(200).json(countries)
}

export default handler
