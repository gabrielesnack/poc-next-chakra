export async function login({ email, password }) {
  try {
    const url = process.env.api.login

    const data = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    })
    const dataJson = await data.json()
    return dataJson.data
  } catch (error) {
    return {}
  }
}

export default login
