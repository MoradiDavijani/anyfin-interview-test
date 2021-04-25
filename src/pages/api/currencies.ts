import type { NextApiRequest, NextApiResponse } from 'next'
import { getConvertedAmount } from 'src/services/currencies'

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const convertResponse = await getConvertedAmount({
    from: req.query.from.toString(),
    to: req.query.to.toString(),
    amount: Number(req.query.amount) || 0
  })

  if ('status' in convertResponse) {
    return res.status(convertResponse.status).send(convertResponse.message)
  }

  res.status(200).json(convertResponse)
}

export default handler
