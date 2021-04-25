import type { NextApiRequest, NextApiResponse } from 'next'
import { getCountriesByName } from 'src/services/countries'

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const countries = await getCountriesByName(req.query.q.toString())

  if ('status' in countries) {
    return res.status(countries.status).send(countries.message)
  }

  res.status(200).json(countries)
}

export default handler
