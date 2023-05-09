"use client"

import React from 'react'
import { db, provider, auth } from "../../config/firebase-config";
import { signInWithPopup } from 'firebase/auth';


export default function About() {
  
  // const signInWithGoogle = async () => {
  //   const result = await signInWithPopup(auth, provider);
  //   console.log(result);  
  // }
  const signIn = async () => {
    const result = await signInWithPopup(auth, provider);
  }

    return (<>
    <div className='flex justify-center mt-9 text-xl font-bold'>
    <button onClick={()=> signIn()} className="">sign in to google</button>
    </div>
  </>
  )
}
