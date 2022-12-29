import { AppProps } from 'next/app'
import '@App/core/styles/global.css'

function MyApp ({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />
}

export default MyApp
