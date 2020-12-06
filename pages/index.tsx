import { useEffect } from 'react'
import { Box } from '@chakra-ui/react'
import Layout from '@/components/layouts/default'
import Cover from '@/components/banners/cover'
import {
  BannerContent,
  Jobs,
  Courses,
  ExploreCities,
  Testimonial,
} from '@/modules/home'

import { useUser } from '@/context/user'
import { suggestedJob, suggestedJobPopular, IJob } from '@/services/job'
interface IHomeProps {
  jobsSuggested: Array<IJob>
  jobsPopular: Array<IJob>
}

const Home = ({ jobsSuggested, jobsPopular }: IHomeProps) => {
  const { user } = useUser()

  useEffect(() => {
    console.log(user)
  }, [user])

  return (
    <Layout>
      <Box>
        <Cover
          d="flex"
          justifyContent="space-between"
          px={['4', '6', '4rem']}
          mb="4"
          img="/img/content/banners/african-american-woman-walking-and-looking-at-cell-PAVD9WY.png"
        >
          <BannerContent />
        </Cover>

        <Jobs data={jobsSuggested} title="Oportunidades abertas recentemente" />

        <Courses />

        <Jobs
          data={jobsPopular}
          title="As mais populares da nossa comunidade"
        />

        <ExploreCities />

        <Testimonial />
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

export default Home
