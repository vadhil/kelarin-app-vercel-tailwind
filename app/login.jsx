"use client"

import React, { useState } from 'react'
import { db, provider, auth } from "../config/firebase-config";
import { signInWithPopup } from 'firebase/auth';
import Cookies from "universal-cookie";

const cookies = new Cookies();


export default function Login(props) {
  const {setIsAuth} = props

  const signIn = async () => {
    const result = await signInWithPopup(auth, provider);
    cookies.set('auth-token', result.user.refreshToken);
    const getcookies = cookies.get('auth-token');
    setIsAuth(true);
    
    console.log(result);
    console.log(result.user.phoneNumber);
  }

    return (<>
    <div className='flex bg-primary justify-center items-center mt-5 py-9 gap-5  shadow-lg border-primary p-5 text-xl flex-col font-bold '>
        <div className='flex justify-center items-center w-50 flex-col bg-tertiary rounded-lg px-6 py-28'>
            <h1 className="text-primary block text-4xl font-boldest text-center">Login</h1>
            <button onClick={()=> signIn()} className="text-primary p-2 mt-3 rounded-lg bg-secondary hover:text-tertiary radius-lg hover:bg-primary">sign in to google</button>
        </div>
    </div>
  </>
  )
}
