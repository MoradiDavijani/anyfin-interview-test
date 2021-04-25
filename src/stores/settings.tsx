import React from 'react'
import usePersistedState from 'src/hooks/persisted-state'

type SettingsProviderProps = {
  children: React.ReactNode
}

type SettingsContextValue = {
  isDarkMode: boolean
  toggleDarkMode: () => void
}

const initialContextValue = {
  isDarkMode: false,
  toggleDarkMode: () => {}
}

const SettingsContext = React.createContext<SettingsContextValue>(
  initialContextValue
)

export function SettingsProvider({ children }: SettingsProviderProps) {
  const [isDarkMode, setIsDarkMode] = usePersistedState<boolean>(
    'isDarkTheme',
    initialContextValue.isDarkMode
  )

  const value = {
    isDarkMode,
    toggleDarkMode: () => setIsDarkMode(prevState => !prevState)
  }

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  )
}

function useAppSettings() {
  return React.useContext(SettingsContext)
}

export default useAppSettings
