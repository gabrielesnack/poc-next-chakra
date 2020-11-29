import { Box, Text } from '@chakra-ui/react'
import { cityCardProps } from './types'

const CityCard = ({ bgImage, text }: cityCardProps) => {
  return (
    <Box
      pos="relative"
      h="14rem"
      pb="4"
      borderWidth="1px"
      rounded="lg"
      bgImage={bgImage}
      bgPos="50%"
      bgSize="cover"
    >
      <Text
        d="flex"
        h="100%"
        justifyContent="center"
        alignItems="center"
        fontSize="md"
        fontWeight="800"
        color="white"
      >
        {text}
      </Text>
    </Box>
  )
}

export default CityCard
