"use client"

import Hero from './hero'
import Profile from './profile'
import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import { signOut } from 'firebase/auth';
import { auth } from '@/config/firebase-config';
import Login from './login';

const cookies = new Cookies();


export default function Home() {

  const [isAuth, setIsAuth] = useState(cookies.get('auth-token'));
  const [room, setRoom] = useState('');
  const [enter, setEnter] = useState(false)

  const handleLogOut = async () => {
    await signOut(auth);
    setIsAuth(false);
    cookies.remove('auth-token')
    setEnter(false)
  }

  useEffect(()=>{

  },[])


if (!isAuth) {
  return (
    <section>
      <Login setIsAuth={setIsAuth}/>
    </section>
  )
}

  return (
      <section>
        {/* <Hero /> */}
        {/* <Profile /> */}
        <button onClick={()=> handleLogOut()} className='p-3 bg-secondary  rounded-lg '> log out</button>    
      </section>
  )
}
