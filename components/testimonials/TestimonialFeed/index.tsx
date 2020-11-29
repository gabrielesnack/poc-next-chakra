import { Box, Text, Avatar } from '@chakra-ui/react'
import CIcon from '@/components/custom/CIcon'
import { generateRandomKey } from '@/utils'

const TestimonialFeed = () => {
  const stars = () => {
    return [1, 2, 3, 4, 5].map((e, i) => (
      <CIcon
        key={generateRandomKey()}
        as="span"
        d="inline-block"
        w="4"
        ml="2"
        color="yellow.400"
        icon={['fas', 'star']}
      />
    ))
  }

  return (
    <Box as="div" d="flex">
      <Avatar
        mb="4"
        mr="4"
        size="xl"
        name="Vanessa Porto"
        src="img/testimonialsfeed/foto_gabriel_burh.jpg"
      />
      <Box as="div">
        <Text as="p" fontSize="sm" fontWeight="400" mb="4">
          A minha experiência foi muito boa, consegui um emprego! A Burh é uma
          ferramenta ótima na busca por novas oportunidades de emprego, fácil de
          aprender usar e sempre atualizada.
        </Text>
        <Text as="h4" fontSize="md" fontWeight="600">
          Gabriel Esnack
          {stars()}
        </Text>
        <Text as="h4" fontSize="sm" fontWeight="400">
          Desenvolvedor FrontEnd
        </Text>
      </Box>
    </Box>
  )
}

export default TestimonialFeed
