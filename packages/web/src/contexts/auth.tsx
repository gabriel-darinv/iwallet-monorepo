import React, { useState, createContext } from 'react'
import {signIn} from '../services/auth';

interface AuthContextProps {
  signed:boolean;
  user:object;
  getSignIn(): Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({}  as AuthContextProps);

export const AuthProvider: React.FC = ({ children }) => {
  async function getSignIn(){
    const res = await signIn();
    console.log(res);
    alert(res);
  }

  return (
    <AuthContext.Provider value={{ signed:false, user:{}, getSignIn }}>
      { children }
    </AuthContext.Provider>
  );
}

export default AuthContext;
