const { apiURL } =
  process.env.NODE_ENV !== 'production'
    ? require('./development.env.js')
    : require('./production.env.js')

const env = () => {
  const user = {
    getUser: `${apiURL}user`,
  }

  const job = {
    getJobs: `${apiURL}jobs/:job`,
    getCityByJob: `${apiURL}cities`,
  }

  const login = `${apiURL}login`
  const logout = `${apiURL}logout`

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
