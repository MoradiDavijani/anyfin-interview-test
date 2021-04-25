import type { AppProps } from 'next/app'
import Shell from 'src/shell'
import 'src/styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Shell>
      <Component {...pageProps} />
    </Shell>
  )
}

export default MyApp
