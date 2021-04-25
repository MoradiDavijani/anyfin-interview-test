export type Currency = {
  code: string
  name: string
  symbol: string
}

export type Countries = {
  capital: number
  currencies: Currency[]
  name: string
  population: number
}
