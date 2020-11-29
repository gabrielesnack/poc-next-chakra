import https from 'https'

export async function getCityByJob(number: number) {
  try {
    const url = process.env.api.job.getCityByJob.replace(':number', number)

    const data = await fetch(url)
    const dataJson = await data.json()
    return dataJson.data
  } catch (error) {
    return []
  }
}
