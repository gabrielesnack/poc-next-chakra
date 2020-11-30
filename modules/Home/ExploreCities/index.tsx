import { useEffect, useState } from 'react'
import { Box, Grid, Heading } from '@chakra-ui/react'
import { generateRandomKey } from '@/utils'
import CityCard from '@/components/cards/CityCard'
import { getCityByJob } from '@/services/cities'

const ExploreCities = () => {
  const [cities, setCities] = useState([])

  useEffect(() => {
    getCityByJob(15).then((res) => {
      setCities(res)
    })
  }, [])

  const exploreCities = () => {
    const newCities = cities.map((city) => (
      <CityCard
        key={generateRandomKey()}
        text={city.city_name}
        bgImage="url('img/content/cities/sorocaba.png')"
        w="auto"
      />
    ))

    return newCities.slice(0, 4)
  }

  return (
    <Box px={['4', '6', '4rem']} mb="10">
      <Heading as="h2" size="lg" my="6">
        Explore por Cidades
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
        {exploreCities()}
      </Grid>
    </Box>
  )
}

export default ExploreCities
