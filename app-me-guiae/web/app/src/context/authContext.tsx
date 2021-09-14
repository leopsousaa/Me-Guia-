import React, { useState, createContext, SetStateAction } from 'react'

interface IAuth {
  isAuth: boolean
  setIsAuth: React.Dispatch<SetStateAction<boolean>>
}

export const AuthContext = createContext<IAuth>({
  isAuth: false,
  setIsAuth: () => null
})

const AuthProvider: React.FC = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false)

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
