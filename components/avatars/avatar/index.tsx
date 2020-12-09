import Image from 'next/image'
import { Box, Text } from '@chakra-ui/react'
import { avatarProps } from './types'
import { getPrefixes } from '@/utils/'

const Avatar = ({ src, alt, quality, ...rest }: avatarProps) => {
  return (
    <Box
      pos="relative"
      d="flex"
      alignItems="center"
      justifyContent="center"
      w="64px"
      h="64px"
      borderRadius="50%"
      bg="gray.300"
      {...rest}
    >
      {src && (
        <Image
          src={src}
          alt={alt}
          layout="fill"
          objectFit="cover"
          objectPosition="100%"
          quality={quality}
          className={'border-radius-50'}
        ></Image>
      )}
      <Text fontWeight="600">{getPrefixes(alt, 2)}</Text>
    </Box>
  )
}

export default Avatar
