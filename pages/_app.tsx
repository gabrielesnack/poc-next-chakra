import { AppProps } from 'next/app'
import { ChakraProvider, theme, CSSReset } from '@chakra-ui/react'
import '@/plugins/'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
