import Head from 'next/head'
import { Box } from '@chakra-ui/react'
import { layoutProps } from './types'
import UserNavbar from '@/components/navbars/UserNavbar'

const Layout = ({ children }: layoutProps) => {
  return (
    <>
      <Head>
        <title>Pagina inicial</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box as="header" mb="70px">
        <UserNavbar></UserNavbar>
      </Box>
      <Box as="main">{children}</Box>
    </>
  )
}

export default Layout
