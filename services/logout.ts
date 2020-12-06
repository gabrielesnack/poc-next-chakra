import axios from 'axios'

export async function logout() {
  try {
    const url = process.env.api.logout

    const { data } = await axios.get(url)
    return data
  } catch (error) {
    throw error
  }
}

export default logout
