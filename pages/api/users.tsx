// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  setTimeout(() => {
    res.statusCode = 200
    res.json(users)
  }, 2000)
}

const users = [
  {
    id: 1,
    name: 'Gabriel',
  },
  {
    id: 2,
    name: 'Dante',
  },
]
