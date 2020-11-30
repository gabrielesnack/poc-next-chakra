import { Box, Grid, Heading } from '@chakra-ui/react'
import JobCard from '@/components/cards/JobCard'
import { jobProps } from './types'

const Jobs = ({ title, data }: jobProps) => {
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

  return (
    <Box px={['4', '6', '4rem']} mb="10">
      <Heading as="h2" size="lg" my="6">
        {title}
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
        {jobsCard(data)}
      </Grid>
    </Box>
  )
}

export default Jobs
