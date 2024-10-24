src>contexts>AuthContext>index.jsx

import React, { useContext, useState, useEffect } from "react";
import { auth } from "../../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";


const AuthContext = React.createContext();


export const useAuth = () => {
    return useContext(AuthContext);
    }

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [loadin, setLoadin] = useState(true);
    
    
    useEffect(() => {
        const unsubscribe  = 
          onAuthStateChanged(auth, initializeUser);
          return unsubscribe;}
        , []);
    }

     async function initializeUseuser() {
         if (user)  {
             setCurrentUser({...user});
             setUserLoggedIn(true);
             } else {
             setCurrentUser(null);
             setUserLoggedIn(false);   
             }
         setLoading(false)
         }
 
     const value = {
         currentUser,
         userLoggedIn,
         Loading
        }
 
     return (
    <AuthContext.Provider value="value"> 
     {!loading && children}
    </AuthContext.Provider> 
     )
}


src>firebase>auth.js

import auth from "./firebase";
import { CreateUserWithEmailAndPassword, SignInWithEmailAndPassword } from "firebase/auth";



const doCreateUserWithEmailAndPassword =  async(email, password) => {
    return CreateUserWithEmailAndPassword(auth, email, password);
};

const doSignInWithEmailAndPassword =  async(email, password) => {
    return SignInWithEmailAndPassword(auth, email, password);
};

src/components/auth/login/index.jsx

const{ userLoggedIn } = useAuth();
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [isSiningIn, setIsSiningIn] = useState(false);
const [errorMessage, setErrorMessage] = useState('');

const onSubmit = async (e) => {
    e.preventDefault();
    if(!isSiningIn) {
        setIsSiningIn(true);
        await doSignInWithEmailAndPassword(email, password)
    }
}

src/components/auth/register/index.jsx

import React, { useState } from "react";
import  { Navigate, Link, useNavigate } from "react-router-dom";
import { useAuth } from '../../../contexts/authContext';
import { doCreateUserWithEmailAndPassword } from "../../../firebase/auth";


const Register = () => {
    const navigate = useNavigate();
    

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isRegistering, setIsRegistering,] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        if(!isRegistering) {
            setIsRegistering(true);
            await doCreateUserWithEmailAndPassword(email, password);
        }
    }

}
















































    