import { objectToQuerystring } from 'src/helpers/querystring'
import { cached } from './cache'

const FIXER_API_KEY = process.env.FIXER_API_KEY
const baseUrl = 'http://data.fixer.io/api'

const ensureTwoDigits = (num: number) => `0${num}`.slice(-2)

type FixerHistoricalData = {
  success: true
  rates: Record<string, number>
}

type FixerResponse =
  | FixerHistoricalData
  | {
      success: false
      error: {
        type: string
      }
    }

type ConvertResponse =
  | {
      status: number
      message: string
    }
  | { amount: number }

export const getConvertedAmount = async ({
  from,
  to,
  amount
}: {
  from: string
  to: string
  amount: number
}): Promise<ConvertResponse> => {
  const now = new Date()
  const currentDate = `${now.getFullYear()}-${ensureTwoDigits(
    now.getMonth() + 1
  )}-${ensureTwoDigits(now.getDate())}`

  try {
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
      )
        .then(response => response.json())
        .then((result: FixerResponse) => {
          if (!result.success) {
            throw new Error(result.error.type)
          }
          return result
        })
    })

    const toRate = data.rates[to.toUpperCase()]
    const fromRate = data.rates[from.toUpperCase()]

    if (!fromRate || !toRate) {
      throw new Error('invalid_currency_codes')
    }

    return {
      amount: (amount * toRate) / fromRate
    }
  } catch (error) {
    return {
      status: 400,
      message: error.message || 'unexpected'
    }
  }
}
