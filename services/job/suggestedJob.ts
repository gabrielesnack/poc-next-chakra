export async function suggestedJob(city = 'sorocaba') {
  try {
    const url = process.env.api.job.getJobsSuggested.replace(':city', city)
    const data = await fetch(url)
    const dataJson = await data.json()
    return dataJson.data
  } catch (error) {
    return []
  }
}
