import React from 'react'
import TextInput from 'src/components/text-input'
import { BASE_CURRENCY } from 'src/configs/currencies'
import { numberToText } from 'src/helpers/number-to-text'
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
  const [amountText, setAmountText] = React.useState<string>('1')
  const amount = Number(amountText)

  const localAmount = currencyRateAmount * amount
  const localAmountText =
    localAmount > 999_999 ? numberToText(localAmount) : localAmount.toFixed(2)

  return (
    <div className={styles.converter}>
      <label className={styles.converter__inputLabel}>
        Enter the amount ({BASE_CURRENCY.name})
      </label>
      <div className={styles.converter__inputWrapper}>
        <TextInput
          value={amountText}
          type="number"
          className={styles.converter__input}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setAmountText(event.target.value)
          }
        />
        <span className={styles.converter__inputIcon}>
          {BASE_CURRENCY.symbol}
        </span>
      </div>
      <div className={styles.converter__result}>
        <span>{localAmountText}</span>
        <span className={styles.converter__resultCurrency}>
          {currency.name} ({currency.symbol})
        </span>
      </div>
    </div>
  )
}

export default CurrencyConverter
