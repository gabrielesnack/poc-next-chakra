const generateRandomKey = () => {
  return Math.random().toString(36).substring(2)
}

export default generateRandomKey
