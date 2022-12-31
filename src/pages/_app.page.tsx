import { AppProps } from 'next/app'
import '@App/core/styles/global.css'
import { client } from '@App/core/lib/apollo'
import { ApolloProvider } from '@apollo/client'

function MyApp ({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
