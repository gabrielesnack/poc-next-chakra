import { Box } from '@chakra-ui/react'
import Image from 'next/image'
import { coverProps } from './types'

const Cover = ({ children, img, px, ...rest }: coverProps) => {
  return (
    <Box pos="relative" d="flex" w="100vw" h="45vh" bgSize="cover" {...rest}>
      <Image
        src={img}
        alt="Banner"
        layout="fill"
        objectFit="cover"
        objectPosition="50% 10%"
        quality="70%"
      ></Image>
      <Box pos="absolute" d="flex" w="100vw" h="45vh" px={px} {...rest}>
        {children}
      </Box>
    </Box>
  )
}

export default Cover
