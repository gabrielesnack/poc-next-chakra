import UserContext from './index'
import { useState } from 'react'
import { IUser, IUserProvider } from './types'

const UserProvider = ({ children }: IUserProvider) => {
  const [user, setUser] = useState<IUser | null>({} as IUser)

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
