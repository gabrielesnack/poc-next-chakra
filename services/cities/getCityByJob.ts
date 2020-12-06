import axios from 'axios'

export async function getCityByJob() {
  try {
    const url = process.env.api.job.getCityByJob
    const { data } = await axios(url)
    return data.data
  } catch (error) {
    return []
  }
}
