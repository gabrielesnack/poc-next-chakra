import { AppProps } from 'next/app'
import { ChakraProvider, theme, CSSReset } from '@chakra-ui/react'
import '@/plugins/'
import { UserProvider } from '@/context/user/'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </ChakraProvider>
  )
}
