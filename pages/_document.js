import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body>
        <script src='/theme.js' async />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
