import { Box, Text, Image } from '@chakra-ui/react'

const CourseCard = () => {
  return (
    <Box borderWidth="1px" rounded="lg" pb="4">
      <Image
        mb="4"
        rounded="lg"
        src="img/content/quero-bolsa/administracao.jpg"
      ></Image>
      <Text
        d="flex"
        justifyContent="center"
        as="h3"
        mx="auto"
        fontSize="md"
        fontWeight="600"
        color="gray.900"
      >
        Administração
      </Text>
      <Text
        d="flex"
        justifyContent="center"
        mx="auto"
        fontSize="sm"
        fontWeight="500"
        color="gray.900"
      >
        A partir de
        <Text as="span" ml="1" fontWeight="900" color="green.400">
          R$ 400,00 / mês.
        </Text>
      </Text>
    </Box>
  )
}

export default CourseCard
