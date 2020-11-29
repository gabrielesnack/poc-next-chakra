const { baseApiUrl, baseApiUrlV2 } =
  process.env.NODE_ENV !== 'production'
    ? require('./development.env.js')
    : require('./production.env.js')

const env = () => {
  const job = {
    getJobsSuggested: `${baseApiUrl}nb/user/feed/jobs/suggested/:city`,
    getJobsPopular: `${baseApiUrl}nb/user/feed/jobs/suggested/popular/:city`,
    getCityByJob: `${baseApiUrlV2}search/cities?type=jobs&take=:number`,
  }

  return {
    api: {
      job,
    },
  }
}

module.exports = env()
