import Head from 'next/head'
import { Box, Heading } from '@chakra-ui/react' 

export default function Home() {
  return (
    <Box as="div">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box as="main">
        <Heading as="h1" size="2xl">Wellcome to next.js with chakra-ui and typescript</Heading>
      </Box>

      <Box as="footer">
        Footer
      </Box>  
    </Box>
  )
}
