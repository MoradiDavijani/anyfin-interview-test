import type { NextApiRequest, NextApiResponse } from 'next'
import { getConvertedAmount } from 'src/services/currencies'

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const amount: number = await getConvertedAmount({
    from: req.query.from.toString(),
    to: req.query.to.toString(),
    amount: Number(req.query.amount) || 0
  })

  res.status(200).json({ amount })
}

export default handler
