import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Script id='theme-switcher' strategy='beforeInteractive'>
          {``}
        </Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
