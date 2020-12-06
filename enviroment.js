const { baseApiUrl, baseApiUrlV2, localApi } =
  process.env.NODE_ENV !== 'production'
    ? require('./development.env.js')
    : require('./production.env.js')

const env = () => {
  const job = {
    getJobsSuggested: `${baseApiUrl}nb/user/feed/jobs/suggested/:city`,
    getJobsPopular: `${baseApiUrl}nb/user/feed/jobs/suggested/popular/:city`,
    getCityByJob: `${baseApiUrlV2}search/cities?type=jobs&take=:number`,
  }

  const login = `${localApi}login`

  return {
    api: {
      job,
      login,
    },
  }
}

module.exports = env()
