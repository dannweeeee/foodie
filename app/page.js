"use client"

import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import CategoryList from '../components/Home/CategoryList';
import RangeSelect from '../components/Home/RangeSelect';
import SelectRating from '../components/Home/SelectRating';

export default function Home() {
  const {data:session} = useSession();
  const router = useRouter();
  useEffect(() => {
    if(!session?.user) {
      router.push("/sign-in");
    }
  },[session])

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 h-screen">
      <div className="p-3">
        <CategoryList />
        <RangeSelect />
        <SelectRating />
      </div>
      <div className="col-span-3">
        Second
      </div>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  )
}
