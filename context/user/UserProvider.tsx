import UserContext from './index'
import { useEffect, useState } from 'react'
import { IUser, IUserProvider } from './types'
import { getUser } from '@/services/user'

const UserProvider = ({ children }: IUserProvider) => {
  const [user, setUser] = useState<IUser | null>({} as IUser)

  useEffect(() => {
    getUser().then((res) => {
      setUser(res)
    })
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
