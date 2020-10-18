import React, { useState, createContext, useContext } from 'react'
import { signIn } from '../services/auth'

interface User {
  name:string;
  email:string;
}

interface AuthContextProps {
  signed: boolean
  user: User | null
  getSignIn(): void
  signOut(): void;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)

  async function getSignIn() {
    const res = await signIn()
    setUser(res.user)
    alert(`Seja bem vindo, ${res.user.name}`)
  }

  function signOut()  {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ signed: Boolean(user), user, getSignIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
 