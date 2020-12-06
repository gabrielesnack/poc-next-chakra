import axios from 'axios'

export async function suggestedJobPopular(job = 'popular') {
  try {
    const url = process.env.api.job.getJobs.replace(':job', job)
    const { data } = await axios(url)
    return data.data
  } catch (error) {
    return []
  }
}
