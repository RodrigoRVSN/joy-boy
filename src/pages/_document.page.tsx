import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render (): JSX.Element {
    return (
      <Html lang="en">
        <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          {/* Change favicon. /favicon.png in public default */}
          <link rel="shortcut icon" href="/favicon.png" type="image/png" />
          {/* Change font - Roboto default */}
          <link
            href="https://fonts.googleapis.com/css2?family=Pirata+One&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
