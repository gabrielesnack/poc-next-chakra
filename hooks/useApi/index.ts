import { useEffect, useState } from 'react'
import { IResponse } from './types'

const useApi = (url, payload = {}) => {
  const [response, setResponse] = useState<IResponse>({
    error: false,
    status: 'pending',
  })

  useEffect(() => {
    fetch(url, payload)
      .then(async (res) => {
        const resJson = await res.json()
        setResponse({ ...resJson, status: 'done' })
      })
      .catch((err) => {
        setResponse({ ...err.response, error: true, status: 'done' })
      })
  }, [])

  return response
}

export default useApi
