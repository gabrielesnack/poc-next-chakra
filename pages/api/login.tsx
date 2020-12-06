import cookie from 'cookie'

export default (req, res) => {
  if (req.method == 'POST') {
    setTimeout(() => {
      res.statusCode = 200
      res.setHeader(
        'Set-Cookie',
        cookie.serialize('token', 'json-web-token', {
          httpOnly: true,
          maxAge: 60 * 60 * 24 * 1, // 1 day
        })
      )
      res.json({
        error: false,
        data: { ...req.body.email },
      })
    }, 2000)
  } else {
    res.statusCode = 404
    res.json({
      error: true,
      data: {},
      message: 'Route not found',
    })
  }
}
