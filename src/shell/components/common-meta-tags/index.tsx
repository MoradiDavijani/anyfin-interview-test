import Head from 'next/head'

const title = 'Countries Search'
const description =
  'Countries app is a search engine for countries all over the world.'

export default function CommonMetaTags() {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0,viewport-fit=cover"
      />
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="icon" href="/logo-icons/32x32.png" sizes="32x32" />
      <link rel="icon" href="/logo-icons/192x192.png" sizes="192x192" />
      <link rel="icon" href="/logo-icons/512x512.png" sizes="512x512" />
      <link
        rel="apple-touch-icon"
        sizes="192x192"
        href="/logo-icons/192x192.png"
      />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content="Countries Search" />
      <meta name="apple-mobile-web-app-status-bar-style" content="white" />
      <meta name="theme-color" content="#00e9ba" />
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Countries Search" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Head>
  )
}
