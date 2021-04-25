import type { AppProps } from 'next/app'
import { SettingsProvider } from 'src/stores/settings'
import Shell from 'src/shell'
import 'src/styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SettingsProvider>
      <Shell>
        <Component {...pageProps} />
      </Shell>
    </SettingsProvider>
  )
}

export default MyApp
