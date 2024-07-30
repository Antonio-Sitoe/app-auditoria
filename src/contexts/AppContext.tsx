'use client'

import { IUser } from '@/@types/user'
import React, { createContext, useContext } from 'react'

interface IContext {
  user: IUser
  children?: React.ReactNode
}
const AuthContext = createContext(
  {} as {
    user: IUser
  },
)

const AuthProvider = ({ children, user }: IContext) => {
  return (
    <AuthContext.Provider
      value={{
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => {
  return useContext(AuthContext)
}

export { useAuth, AuthProvider }
