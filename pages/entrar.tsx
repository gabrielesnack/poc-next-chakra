import { useState } from 'react'
import { useRouter } from 'next/router'
import { Box, Flex, Input, Button, Text } from '@chakra-ui/react'
import login from '@/services/login'

const Entrar = () => {
  const router = useRouter()
  const [email, setPass] = useState(null)
  const [password, setEmail] = useState(null)

  const handleLogin = async () => {
    const res = await login({ email, password })
    console.log(res)
    if (!res.error) {
      router.push('/')
    }
  }

  return (
    <Flex w="100vw" h="100vh" justifyContent="center" alignItems="center">
      <Box w={['90%', '70%', '50%', '25%']} size="md">
        <Text mb="8px">Email</Text>
        <Input
          mb="4"
          type={'email'}
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Text mb="8px">Password</Text>
        <Input
          mb="4"
          type={'password'}
          placeholder="Enter password"
          onChange={(e) => setPass(e.target.value)}
        />
        <Button colorScheme="blue" w="100%" onClick={handleLogin}>
          Entrar
        </Button>
      </Box>
    </Flex>
  )
}

export default Entrar
