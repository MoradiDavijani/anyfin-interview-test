export type Currency = {
  code: string
  name: string
  symbol: string
}

export type Country = {
  alpha3Code: string
  capital: string
  currencies: Currency[]
  name: string
  population: number
}
