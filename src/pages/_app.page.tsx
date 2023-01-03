import { ApolloProvider } from '@apollo/client'
import { AppProps } from 'next/app'
import { client } from '@App/core/lib/apollo'
import '@App/core/styles/global.css'

function MyApp ({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
