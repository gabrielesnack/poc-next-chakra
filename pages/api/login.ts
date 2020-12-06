import cookie from 'cookie'
import users from '@/mock/users'

export default (req, res) => {
  if (req.method == 'POST') {
    const params = JSON.parse(req.body)
    setTimeout(() => {
      const user = findUser(params)

      if (user) {
        res.statusCode = 200
        res.setHeader(
          'Set-Cookie',
          cookie.serialize('token', user.token, {
            httpOnly: true,
            maxAge: 60 * 60 * 24 * 1, // 1 day
          })
        )
        res.json({
          error: false,
          data: { ...user },
        })
      } else {
        res.statusCode = 404
        res.json({
          error: true,
          data: {},
          message: 'User not found',
        })
      }
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

const findUser = ({ email, password }) => {
  return users.find((e) => e.email == email && e.password == password)
}
