import { Box, Grid, Heading, Badge } from '@chakra-ui/react'
import CourseCard from '@/components/cards/CourseCard'
import { generateRandomKey } from '@/utils'

const Courses = () => {
  const coursesCard = () => {
    return [1, 2, 3, 4].map(() => <CourseCard key={generateRandomKey()} />)
  }

  return (
    <Box px={['4', '6', '4rem']} mb="10">
      <Heading as="h2" size="lg" my="6">
        Os melhores cursos com bolsas de estudo
        <Badge ml="4" px="2" fontSize=".7rem" color="gray.600" rounded="6px">
          Parceiro
        </Badge>
      </Heading>
      <Grid
        w="100%"
        templateColumns={[
          'repeat(1, 1fr)',
          'repeat(2, 1fr)',
          'repeat(3, 1fr)',
          'repeat(4, 1fr)',
        ]}
        gap="6"
      >
        {coursesCard()}
      </Grid>
    </Box>
  )
}

export default Courses
