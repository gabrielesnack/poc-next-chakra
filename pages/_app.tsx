import { AppProps } from 'next/app'
import { ThemeProvider, theme, CSSReset } from '@chakra-ui/react';
import '@/styles/globals.css'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}