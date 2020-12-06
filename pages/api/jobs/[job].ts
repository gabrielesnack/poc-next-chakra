import jobsRecent from '@/mock/jobsRecent'
import jobsPopular from '@/mock/jobsPopular'

export default (req, res) => {
  if (req.method == 'GET') {
    setTimeout(() => {
      const jobs = {
        recent: jobsRecent,
        popular: jobsPopular,
      }

      const getJob = jobs[req.query.job]

      if (getJob) {
        res.statusCode = 200
        res.json({
          error: false,
          data: getJob,
        })
      } else {
        res.statusCode = 404
        res.json({
          error: true,
          data: [],
          message: 'Jobs not found',
        })
      }
    }, 1000)
  } else {
    res.statusCode = 404
    res.json({
      error: true,
      message: 'Route not found',
    })
  }
}
