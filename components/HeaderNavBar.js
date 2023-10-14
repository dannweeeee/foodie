"use client"

import { useSession } from 'next-auth/react';
import Image from 'next/image'
import React from 'react'

function HeaderNavBar() {
  const {data:session} = useSession();

  return (
    <div className="flex items-center justify-between p-5">
      <div className="flex gap-7 items-center">
        <Image src="/grey-logo-no-bg.png" alt="logo" width={160} height={160}/>
        <h2>Home</h2>
        <h2>Favourites</h2>
      </div>
      <div className="bg-gray-100 p-[6px] rounded-md w-[40%] gap-3 hidden md:flex">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
        <input type="text" placeholder="Search" className="bg-transparent outline-none w-full" />
      </div>
      <div className="flex gap-5">
        {session?.user ? 
          <Image src={session.user.image} 
            alt='user' 
            width={40} 
            height={40}
            className="rounded-full"
          /> : null
        } 
        <button onClick={() => signOut()}>Sign Out</button>
      </div>
    </div>
  )
}

export default HeaderNavBar
