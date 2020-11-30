import Head from 'next/head'
import { Box, extendTheme, ChakraProvider } from '@chakra-ui/react'
import { layoutProps } from './types'
import UserNavbar from '@/components/navbars/UserNavbar'

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  colors: {
    primary: '#1da1f1',
    black: '#1da1f1',
    gray: {
      200: '#1da1f1',
    },
  },
})

const Layout = ({ children }: layoutProps) => {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Head>
          <title>Pagina inicial</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Box as="header" mb="70px">
          <UserNavbar></UserNavbar>
        </Box>
        <Box as="main">{children}</Box>
      </ChakraProvider>
    </>
  )
}

export default Layout
