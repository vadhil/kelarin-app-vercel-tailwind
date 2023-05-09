import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <header>
        <nav className='flex gap-4  text-xl justify-around p-7 bg-prime text-white  '>
            <Link className='font-bold' href="/">AEX Digital</Link>
            <Link href={"/login"}>login</Link>
            <Link href={"/about"}>about</Link>
        </nav>
    </header>
  )
}
