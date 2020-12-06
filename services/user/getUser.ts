import axios from 'axios'

export async function getUser() {
  try {
    const url = process.env.api.user.getUser
    const { data } = await axios.get(url)
    return data
  } catch (error) {
    throw error
  }
}

export default getUser
