import cities from '@/mock/cities'

export default (req, res) => {
  if (req.method == 'GET') {
    setTimeout(() => {
      res.statusCode = 200
      res.json({
        error: false,
        data: cities,
      })
    }, 1000)
  } else {
    res.statusCode = 404
    res.json({
      error: true,
      message: 'Route not found',
    })
  }
}
