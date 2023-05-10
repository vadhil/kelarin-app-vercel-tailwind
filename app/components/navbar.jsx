import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <header>
        <nav className='flex gap-4  text-xl justify-around items-center p-7 bg-prime text-white  '>
            <Link className='font-boldest text-4xl' href="/">Kelar.in</Link>
            <Link href={"/profile"}>profile</Link>
            <Link href={"/about"}>about</Link>
        </nav>
    </header>
  )
}
