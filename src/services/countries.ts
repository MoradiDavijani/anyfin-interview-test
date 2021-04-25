import { Country } from 'src/types/countries'

const baseUrl = 'https://restcountries.eu/rest/v2'
const fields = ['capital', 'currencies', 'name', 'population']

type CountriesResponse =
  | {
      status: number
      message: string
    }
  | Country[]

export const getCountriesByName = (
  name: string
): Promise<CountriesResponse> => {
  return fetch(
    `${baseUrl}/name/${name}?fields=${fields.join(';')}`
  ).then(response => response.json())
}
