import { Country } from 'src/types/countries'

const baseUrl = 'https://restcountries.eu/rest/v2'
const fields = ['alpha3Code', 'capital', 'currencies', 'name', 'population']

type CountriesResponse =
  | {
      status: number
      message: string
    }
  | Country[]

type CountryResponse =
  | {
      status: number
      message: string
    }
  | Country

export const getCountriesByName = (
  name: string
): Promise<CountriesResponse> => {
  return fetch(
    `${baseUrl}/name/${name}?fields=${fields.join(';')}`
  ).then(response => response.json())
}

export const getCountryByCode = (code: string): Promise<CountryResponse> => {
  return fetch(
    `${baseUrl}/alpha/${code}?fields=${fields.join(';')}`
  ).then(response => response.json())
}
