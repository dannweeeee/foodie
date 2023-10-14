"use client"

import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import CategoryList from '../components/Home/CategoryList';
import RangeSelect from '../components/Home/RangeSelect';
import SelectRating from '../components/Home/SelectRating';
import GoogleMapView from '../components/Home/GoogleMapView';
import GlobalApi from '../shared/GlobalApi.js';
import { UserLocationContext } from '../context/UserLocationContext.js';
import BusinessList from '../components/Home/BusinessList';
import SkeltonLoading from '../components/SkeletonLoading.js';

export default function Home() {
  const {data:session} = useSession();
  const router = useRouter();

  const [category, setCategory] = useState();
  const [radius, setRadius] = useState(2500);
  const {userLocation, setUserLocation} = useContext(UserLocationContext);

  const [businessList, setBusinessList] = useState([]); 
  const [loading, setLoading] = useState(true);

  useEffect(() => { // will execute even when the session change
    if(!session?.user) {
      router.push("/sign-in");
    }
  },[session])

  useEffect(() => {
    getGooglePlace();
  },[category, radius])

  const getGooglePlace = () => {
    setLoading(true);
    GlobalApi.getGooglePlace(category, radius, userLocation.lat, userLocation.lng).then(response => {
      console.log(response.data.product.results);
      setBusinessList(response.data.product.results);
      setLoading(false);
    })
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 h-screen">
      <div className="p-3">
        <CategoryList onCategoryChange={(value) => setCategory(value)} />
        <RangeSelect onRadiusChange={(value) => setRadius(value)} />
        {/* <SelectRating /> */}
      </div>
      <div className=' col-span-3'>
          <GoogleMapView  businessList={businessList}/>
          <div className='md:absolute mx-2 w-[90%] md:w-[74%] bottom-36 relative md:bottom-3'>
            {!loading?  <BusinessList businessList={businessList} /> :
            <div className='flex gap-3'>
              {[1,2,3,4,5].map((item,index)=>(
                <SkeltonLoading key={index} />
              ))}
            </div>
            }
        </div>
      </div>
    </div>
  )
}
