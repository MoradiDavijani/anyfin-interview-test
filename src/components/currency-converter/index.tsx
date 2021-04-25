import React from 'react'
import TextInput from 'src/components/text-input'
import { BASE_CURRENCY } from 'src/configs/currencies'
import type { Currency } from 'src/types/countries'
import styles from './currency-converter.module.css'

type CurrencyConverterProps = {
  currency: Currency
  currencyRateAmount: number
}

function CurrencyConverter({
  currency,
  currencyRateAmount
}: CurrencyConverterProps) {
  const [amount, setAmount] = React.useState<number>(1)

  return (
    <div className={styles.converter}>
      <label className={styles.converter__inputLabel}>
        Enter the amount ({BASE_CURRENCY.name})
      </label>
      <div className={styles.converter__inputWrapper}>
        <TextInput
          value={amount}
          type="number"
          className={styles.converter__input}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setAmount(Number(event.target.value))
          }
        />
        <span className={styles.converter__inputIcon}>
          {BASE_CURRENCY.symbol}
        </span>
      </div>
      <div className={styles.converter__result}>
        <span>
          {(currencyRateAmount * amount).toFixed(3)}{' '}
          <span>{currency.symbol}</span>
        </span>
      </div>
    </div>
  )
}

export default CurrencyConverter
