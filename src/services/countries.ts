import { Countries } from 'src/types/countries'

const baseUrl = 'https://restcountries.eu/rest/v2'
const fields = ['capital', 'currencies', 'name', 'population']

export const getCountriesByName = (name: string): Promise<Countries[]> => {
  return fetch(
    `${baseUrl}/name/${name}?fields=${fields.join(';')}`
  ).then(response => response.json())
}
