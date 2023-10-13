"use client"

import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const {data:session} = useSession();
  const router = useRouter();
  useEffect(() => {
    if(!session?.user) {
      router.push("/sign-in");
    }
  },[session])

  return (
    <div>
      Home Page
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  )
}
