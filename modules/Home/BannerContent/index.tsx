import { Box, Text, Image } from '@chakra-ui/react'
import CIcon from '@/components/custom/CIcon'
import { generateRandomKey } from '@/utils'

const BannerContent = () => {
  const bannerImages = () => {
    return [1, 2, 3, 4].map(() => (
      <Image
        key={generateRandomKey()}
        h="23%"
        ml="auto"
        src="img/content/banner-burh-logo.svg"
        alt="imagem burh"
      />
    ))
  }

  return (
    <>
      <Box d="block" mt="14" h="100" justifyContent="between">
        <Text fontSize="4xl" fontWeight="700" color="white">
          Ser Burh
          <br />é nunca mais
          <br />
          pagar por um
          <br />
          emprego.
        </Text>
        <Box
          d="flex"
          alignItems="center"
          justifyContent="center"
          h="2rem"
          px="1rem"
          variant="outline"
          color="white"
          border="1px"
          borderColor="white"
          rounded="26px"
        >
          <CIcon w="4" icon={['fas', 'search']} />
          <Text fontSize="xl" fontWeight="700">
            {' '}
            encontre no burh |{' '}
          </Text>
          <Image
            w="60px"
            h="60px"
            src="img/brand/burh-imagotipo-white.svg"
            alt="imagem burh"
          />
        </Box>
      </Box>
      <Box py="4" d={['none', null, 'block']}>
        {bannerImages()}
      </Box>
    </>
  )
}

export default BannerContent
