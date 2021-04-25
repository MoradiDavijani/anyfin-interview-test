import Shell from 'src/shell'
import 'src/styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Shell>
      <Component {...pageProps} />
    </Shell>
  )
}

export default MyApp
