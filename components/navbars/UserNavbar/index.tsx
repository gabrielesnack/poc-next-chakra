import { Box, Image } from '@chakra-ui/react'

const UserNavbar = () => {
  return (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      zIndex="100"
      d="flex"
      alignItems="center"
      w="100%"
      h="70px"
      px={['4', '6', '4rem']}
      bg="white"
      borderBottomWidth="1px"
    >
      <Image h="30px" src="img/brand/burh-imagotipo.svg" />
    </Box>
  )
}

export default UserNavbar
