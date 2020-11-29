import { Box, Text, Image, Grid, Heading, Badge } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { generateRandomKey } from '@/utils'
import Layout from '@/components/layouts/blue'
import Cover from '@/components/banners/cover'
import JobCard from '@/components/cards/JobCard'
import CourseCard from '@/components/cards/CourseCard'
import CityCard from '@/components/cards/CityCard'
import TestimonialFeed from '@/components/testimonials/TestimonialFeed'
import CIcon from '@/components/custom/CIcon'

import { suggestedJob, suggestedJobPopular } from '@/services/job'
import { getCityByJob } from '@/services/cities'
import { IJob } from '@/services/job/types'
interface IHomeProps {
  jobsSuggested: IJob
  jobsPopular: IJob
}

const HomeBlue = ({ jobsSuggested, jobsPopular }: IHomeProps) => {
  const [cities, setCities] = useState([])

  useEffect(() => {
    getCityByJob(15).then((res) => {
      setCities(res)
    })
  }, [])

  const jobsCard = (jobs) => {
    return jobs.map((job) => (
      <JobCard
        key={job.job_id}
        companyName={job.company_name ? job.company_name : 'confidencial'}
        avatar={job.company_logo}
        title={job.job_title}
        city={job.city_name}
        createdAt={job.created_at}
      />
    ))
  }

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

  const coursesCard = () => {
    return [1, 2, 3, 4].map(() => <CourseCard key={generateRandomKey()} />)
  }

  const bannerImages = () => {
    return [1, 2, 3, 4].map(() => (
      <Image
        key={generateRandomKey()}
        h="23%"
        ml="auto"
        src="img/content/banner-burh-logo.svg"
        alt="imagem burh"
      />
    ))
  }

  return (
    <Layout>
      <Box as="div">
        <Cover
          d="flex"
          justifyContent="space-between"
          px={['4', '6', '4rem']}
          mb="4"
          img="/img/content/banners/african-american-woman-walking-and-looking-at-cell-PAVD9WY.png"
        >
          <>
            <Box d="block" mt="14" h="100" justifyContent="between">
              <Text fontSize="4xl" fontWeight="700" color="white">
                Ser Burh
                <br />é nunca mais
                <br />
                pagar por um
                <br />
                emprego.
              </Text>
              <Box
                d="flex"
                alignItems="center"
                justifyContent="center"
                h="2rem"
                px="1rem"
                variant="outline"
                color="white"
                border="1px"
                borderColor="white"
                rounded="26px"
              >
                <CIcon w="4" icon={['fas', 'search']} />
                <Text fontSize="xl" fontWeight="700">
                  {' '}
                  encontre no burh |{' '}
                </Text>
                <Image
                  w="60px"
                  h="60px"
                  src="img/brand/burh-imagotipo-white.svg"
                  alt="imagem burh"
                />
              </Box>
            </Box>
            <Box py="4" d={['none', null, 'block']}>
              {bannerImages()}
            </Box>
          </>
        </Cover>

        <Box px={['4', '6', '4rem']} mb="10">
          <Heading as="h2" size="lg" my="6">
            Oportunidades abertas recentemente
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
            {jobsCard(jobsSuggested)}
          </Grid>
        </Box>

        <Box px={['4', '6', '4rem']} mb="10">
          <Heading as="h2" size="lg" my="6">
            Os melhores cursos com bolsas de estudo
            <Badge
              ml="4"
              px="2"
              fontSize=".7rem"
              color="gray.600"
              rounded="6px"
            >
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
        <Box px={['4', '6', '4rem']} mb="10">
          <Heading as="h2" size="lg" my="6">
            As mais populares da nossa comunidade
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
            {jobsCard(jobsPopular)}
          </Grid>
        </Box>

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
      </Box>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await Promise.all([suggestedJob(), suggestedJobPopular()])

  const jobsSuggested = res[0]
  const jobsPopular = res[1]

  return {
    props: {
      jobsSuggested: jobsSuggested,
      jobsPopular: jobsPopular,
    },
    revalidate: 60,
  }
}

export default HomeBlue
