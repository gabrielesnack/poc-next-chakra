import cookie from 'cookie'
import users from '@/mock/users'

export default (req, res) => {
  if (req.method == 'GET') {
    const cookies = cookie.parse(req.headers.cookie || '')
    console.log(cookies.token)
    res.statusCode = 200
    res.json()
  }
}
