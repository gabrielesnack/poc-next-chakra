import { Box, Image, Button, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useUser } from '@/context/user'
import logout from '@/services/logout'

const UserNavbar = () => {
  const router = useRouter()
  const { user, setUser } = useUser()

  const handleLogout = async () => {
    await logout()
    setUser(null)
  }

  return (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      zIndex="100"
      d="flex"
      justifyContent="space-between"
      alignItems="center"
      w="100%"
      h="70px"
      px={['4', '6', '4rem']}
      bg="white"
      borderBottomWidth="1px"
    >
      <Image h="30px" src="img/brand/burh-imagotipo.svg" />
      {!user ? (
        <Button
          colorScheme="blue"
          rounded="23px"
          px="3rem"
          onClick={() => router.push('/entrar')}
        >
          Entrar
        </Button>
      ) : (
        <Box d="flex">
          {console.log(user)}
          <Text fontSize="xl" fontWeight="600" mr="4" mt="1">
            {user?.name}
          </Text>
          <Button
            colorScheme="blue"
            rounded="23px"
            px="3rem"
            onClick={handleLogout}
          >
            Sair
          </Button>
        </Box>
      )}
    </Box>
  )
}

export default UserNavbar
