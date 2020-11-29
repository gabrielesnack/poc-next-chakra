import { Box, Avatar, Text } from '@chakra-ui/react'
import { propsJobCard } from './types'
import CIcon from '@/components/custom/CIcon'

const JobCard = ({
  avatar,
  companyName,
  title,
  city,
  createdAt,
}: propsJobCard) => {
  return (
    <Box pos="relative" borderWidth="1px" rounded="lg" p="4">
      <Avatar mb="4" size="lg" name={companyName} src={avatar} />

      <Box
        pos="absolute"
        d="flex"
        justifyContent="space-between"
        w="80px"
        h="30px"
        p="1rem"
        right="1rem"
        top="1rem"
      >
        <CIcon w="4" color="primary" size="lg" icon={['far', 'heart']} />
        <CIcon w="4" color="primary" size="lg" icon={['fas', 'share']} />
      </Box>

      <Text as="h3" fontSize="md">
        {companyName}
      </Text>
      <Text as="h3" fontSize="lg" fontWeight="600">
        {title}
      </Text>
      <Text as="h3" mb="8" fontSize="md" fontWeight="500" color="gray.300">
        {city}
      </Text>
      <Text
        as="h4"
        pos="absolute"
        bottom="1rem"
        fontSize="sm"
        fontWeight="500"
        color="gray.600"
      >
        {createdAt}
      </Text>
    </Box>
  )
}

export default JobCard
