import axios from 'axios'

export async function login({ email, password }) {
  try {
    const url = process.env.api.login

    const { data } = await axios.post(url, {
      email,
      password,
    })

    return data.data
  } catch (error) {
    throw error
  }
}

export default login
