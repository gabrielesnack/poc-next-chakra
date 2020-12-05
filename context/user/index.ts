import { createContext, useContext } from 'react'
import { IUserContext } from './types'
import UserProvider from './UserProvider'

const UserContext = createContext<IUserContext>({} as IUserContext)

const useUser = () => {
  const context = useContext(UserContext)

  return context
}

export { UserProvider, useUser }
export default UserContext
