import { Box } from '@chakra-ui/react'
import { coverProps } from './types'

const Cover = ({ children, ...rest }: coverProps) => {
  return (
    <Box
      d="flex"
      w="100vw"
      h="45vh"
      bgPosition="50% 10%"
      bgSize="cover"
      {...rest}
    >
      {children}
    </Box>
  )
}

export default Cover
