import React from 'react'
import type { Country } from 'src/types/countries'
import useDebouncedCallback from 'src/hooks/debounced-callback'
import usePersistedState from 'src/hooks/persisted-state'
import useChangeListener from 'src/hooks/change-listener'
import useQuery from 'src/hooks/query'
import TextInput from 'src/components/text-input'
import Button from 'src/components/button'
import Spinner from 'src/components/spinner'
import styles from './search-card.module.css'

type SearchCardProps = {
  onSelect: (country: Country) => void
}

function SearchCard({ onSelect }: SearchCardProps) {
  const [query, setQuery] = React.useState<string>('')
  const [recentCountries, setRecentCountries] = usePersistedState<Country[]>(
    'recentCountries',
    []
  )

  const onSearch = (countryQuery: string): Promise<Country[]> => {
    if (!countryQuery) {
      return Promise.resolve([])
    }

    return fetch(`/api/countries?q=${countryQuery}`).then(response =>
      response.json()
    )
  }

  const debouncedSearch = useDebouncedCallback<string, Country[]>(onSearch, 500)

  const { data: countries, isLoading, fetchData: fetchCountries } = useQuery<
    Country[]
  >({
    initialData: [],
    fetcher: () => debouncedSearch(query)
  })

  useChangeListener(() => {
    fetchCountries()
  }, [query])

  const onSelectCountry = (country: Country) => {
    setRecentCountries(prevState => [
      country,
      ...prevState.filter(recentCountry => recentCountry.name !== country.name)
    ])
    onSelect(country)
  }

  const countriesToShow =
    !query && countries.length === 0 ? recentCountries : countries

  return (
    <div className={styles.searchCard}>
      <label htmlFor="country">Enter Country Name:</label>
      <div className={styles.searchCard__inputWrapper}>
        <TextInput
          id="country"
          value={query}
          placeholder="Search Countries"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setQuery(event.target.value)
          }
          className={styles.searchCard__input}
        />
        {isLoading ? (
          <Spinner className={styles.searchCard__spinner} size={20} />
        ) : null}
      </div>
      <ul className={styles.searchCard__itemsList}>
        {countriesToShow.map(country => (
          <li key={country.name} className={styles.searchCard__item}>
            <Button
              variant="link"
              onClick={() => onSelectCountry(country)}
              className={styles.searchCard__itemButton}
            >
              {country.name}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SearchCard
