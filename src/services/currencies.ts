import { objectToQuerystring } from 'src/helpers/querystring'
import { cached } from './cache'

const FIXER_API_KEY = process.env.FIXER_API_KEY
const baseUrl = 'http://data.fixer.io/api'

const ensureTwoDigits = (num: number) => `0${num}`.slice(-2)

type FixerHistoricalData = {
  rates: Record<string, number>
}

export const getConvertedAmount = async ({
  from,
  to,
  amount
}: {
  from: string
  to: string
  amount: number
}): Promise<number> => {
  const now = new Date()
  const currentDate = `${now.getFullYear()}-${ensureTwoDigits(
    now.getMonth() + 1
  )}-${ensureTwoDigits(now.getDate())}`

  const data: FixerHistoricalData = await cached(`${from}_${to}`, () => {
    /**
     * We had to use the Fixer historical API because our free plan does not
     * support the Fixer convert API. Also, we use caching here to avoid
     * reaching the Fixer's free plan limits (1000 calls per month).
     */
    return fetch(
      `${baseUrl}/${currentDate}?${objectToQuerystring({
        symbols: [from, to].join(','),
        access_key: FIXER_API_KEY
      })}`
    ).then(response => response.json())
  })

  return (
    (amount * data.rates[to.toUpperCase()]) / data.rates[from.toUpperCase()]
  )
}
