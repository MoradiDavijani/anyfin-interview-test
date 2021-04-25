export type Currency = {
  code: string
  name: string
  symbol: string
}

export type Country = {
  capital: number
  currencies: Currency[]
  name: string
  population: number
}
