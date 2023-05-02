import React, { createContext } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase-config';


export const AuthContext = createContext(null);

const auth = getAuth(app);


const AuthProvider = ({children}) => {

    const user = {name:"okla"};
    const authInfo = {user};

  return (
    <AuthContext.Provider value={authInfo}>  
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;