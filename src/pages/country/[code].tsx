import { GetServerSideProps } from 'next'
import Link from 'next/link'
import type { Country } from 'src/types/countries'
import { BASE_CURRENCY } from 'src/configs/currencies'
import { getCountryByCode } from 'src/services/countries'
import { getConvertedAmount } from 'src/services/currencies'
import { numberToText } from 'src/helpers/number-to-text'
import CurrencyConverter from 'src/components/currency-converter'
import styles from './country.module.css'

type CountryPageProps = {
  country: Country
  currencyRateAmount: number
}

function CountryPage({ country, currencyRateAmount }: CountryPageProps) {
  return (
    <main
      className={styles.country}
      style={{
        backgroundImage: `url('https://source.unsplash.com/featured/?${country.name}')`
      }}
    >
      <div className={styles.country__card}>
        <Link href="/">
          <a>&larr; Change country</a>
        </Link>
        <h1 className={styles.country__title}>{country.name}</h1>
        <h2 className={styles.country__subtitle}>Capital: {country.capital}</h2>
        <h2 className={styles.country__subtitle}>
          Population: {numberToText(country.population)}
        </h2>
      </div>
      <div className={styles.country__card}>
        <CurrencyConverter
          currency={country.currencies[0]}
          currencyRateAmount={currencyRateAmount}
        />
      </div>
    </main>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  query,
  res
}) => {
  const countryCode = query.code as string

  const country = await getCountryByCode(countryCode)
  if ('status' in country) {
    res.statusCode = country.status
    return {
      notFound: true
    }
  }

  const currencyRate = await getConvertedAmount({
    from: BASE_CURRENCY.code,
    to: country.currencies[0].code,
    amount: 1
  })
  if ('status' in currencyRate) {
    res.statusCode = currencyRate.status
    return {
      notFound: true
    }
  }

  return {
    props: {
      country,
      currencyRateAmount: currencyRate.amount
    }
  }
}

export default CountryPage
