const { baseApiUrl, baseApiUrlV2, localApi } =
  process.env.NODE_ENV !== 'production'
    ? require('./development.env.js')
    : require('./production.env.js')

const env = () => {
  const user = {
    getUser: `${localApi}user`,
  }

  const job = {
    getJobs: `${localApi}jobs/:job`,
    getCityByJob: `${localApi}cities`,
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
