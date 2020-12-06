import cookie from 'cookie'
import users from '@/mock/users'

export default (req, res) => {
  if (req.method == 'GET') {
    const cookies = cookie.parse(req.headers.cookie || '')
    const user = findUser(cookies)
    if (user) {
      res.statusCode = 200
      res.json(user)
    } else {
      res.statusCode = 404
      res.json({
        error: true,
        message: 'User not Found',
      })
    }
  }
}

const findUser = ({ token }) => {
  return users.find((e) => e.token == token)
}
