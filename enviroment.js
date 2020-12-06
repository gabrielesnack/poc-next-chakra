const { baseApiUrl, baseApiUrlV2, localApi } =
  process.env.NODE_ENV !== 'production'
    ? require('./development.env.js')
    : require('./production.env.js')

const env = () => {
  const user = {
    getUser: `${localApi}user`,
  }

  const job = {
    getJobsSuggested: `${baseApiUrl}nb/user/feed/jobs/suggested/:city`,
    getJobsPopular: `${baseApiUrl}nb/user/feed/jobs/suggested/popular/:city`,
    getCityByJob: `${baseApiUrlV2}search/cities?type=jobs&take=:number`,
  }

  const login = `${localApi}login`
  const logout = `${localApi}logout`

  return {
    api: {
      user,
      job,
      login,
      logout,
    },
  }
}

module.exports = env()
