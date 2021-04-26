import React from 'react'
import type { AppProps } from 'next/app'
import { SettingsProvider } from 'src/stores/settings'
import Shell from 'src/shell'
import 'src/styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').then(
        () => console.log('Service Worker registered successfully'),
        error => console.log('Service Worker registration failed', error)
      )
    }
  }, [])

  return (
    <SettingsProvider>
      <Shell>
        <Component {...pageProps} />
      </Shell>
    </SettingsProvider>
  )
}

export default MyApp
