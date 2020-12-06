import { useEffect, useState } from 'react'
import UserContext from './index'
import { IUser, IUserProvider } from './types'
import { getUser } from '@/services/user'

const UserProvider = ({ children }: IUserProvider) => {
  const [user, setUser] = useState<IUser | null>(null)

  useEffect(() => {
    getUser()
      .then((res) => {
        setUser(res)
      })
      .catch((err) => {})
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
