import { Box, Text, Image, Grid, Heading } from '@chakra-ui/react'
import Layout from '@/components/layouts/default'
import Cover from '@/components/banners/cover'
import JobCard from '@/components/cards/JobCard'
import { generateRandomKey } from '@/utils'

const Home = () => {
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
          bgImage="url(img/content/banners/african-american-woman-walking-and-looking-at-cell-PAVD9WY.png)"
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
                {/* <font-awesome-icon :icon="['fas', 'search']" /> */}
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
            <JobCard
              companyName="Auge Recursos Humanos"
              avatar="https://storage.googleapis.com/prod-storage-api-burh/app/company/logo/0aqrthuLTmOnJl645oVUaO0R7MTafk3amdh1IofPLmGC0J8OCi/200/091520201049235f60c663a0d2a.png"
              title="MOTORISTA"
              city="Sorocaba"
              createdAt="há um dia"
            />
          </Grid>
        </Box>
      </Box>
    </Layout>
  )
}

export default Home
