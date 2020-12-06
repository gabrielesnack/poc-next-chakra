export async function getUser() {
  try {
    const url = process.env.api.user.getUser
    const data = await fetch(url)
    const dataJson = await data.json()
    return dataJson
  } catch (error) {
    throw error
  }
}

export default getUser
