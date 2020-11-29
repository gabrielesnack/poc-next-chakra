export async function suggestedJobPopular(city = 'sorocaba') {
  try {
    const url = process.env.api.job.getJobsPopular.replace(':city', city)
    const data = await fetch(url)
    const dataJson = await data.json()
    return dataJson.data
  } catch (error) {
    return []
  }
}
