import { ReactChild } from 'react'

export interface IUser {
  id: number
  name: string
}

export interface IUserProvider {
  children: ReactChild
}

export interface IUserContext {
  user: IUser
  setUser: (...args: any[]) => void
}
