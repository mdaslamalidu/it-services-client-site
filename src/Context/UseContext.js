import React, { createContext, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const UseContext = ({children}) => {
    const [user, setUser] = useState({Name: "aslam"})

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userInfo = { user, createUser }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UseContext;