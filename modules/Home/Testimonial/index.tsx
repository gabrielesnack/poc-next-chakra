import { Box, Grid, Heading } from '@chakra-ui/react'
import TestimonialFeed from '@/components/testimonials/TestimonialFeed'

const Testimonial = () => {
  return (
    <Box px={['4', '6', '4rem']} mb="10">
      <Grid
        w="100%"
        templateColumns={['repeat(1, 1fr)', null, 'repeat(2, 1fr)']}
        gap="6"
      >
        <Heading as="h2" size="lg" my="6">
          Depoimentos de pessoas que foram contratadas pelo BURH
        </Heading>
        <TestimonialFeed />
      </Grid>
    </Box>
  )
}

export default Testimonial
