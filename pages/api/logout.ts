import cookie from 'cookie'
import users from '@/mock/users'

export default (req, res) => {
  if (req.method == 'GET') {
    setTimeout(() => {
      const cookies = cookie.parse(req.headers.cookie || '')
      res.statusCode = 200
      res.setHeader(
        'Set-Cookie',
        cookie.serialize('token', cookies.token, {
          httpOnly: true,
          maxAge: 0,
        })
      )
      res.json({
        error: false,
        message: 'you are now unauthenticated',
      })
    }, 1000)
  }
}
