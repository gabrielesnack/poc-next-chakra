export async function logout() {
  try {
    const url = process.env.api.logout

    const data = await fetch(url)
    const dataJson = await data.json()
    return dataJson
  } catch (error) {
    throw error
  }
}

export default logout
