"use client"

import Provider from './Provider'
import './globals.css'
import { Raleway } from 'next/font/google'
import HeaderNavBar from '../components/HeaderNavBar.js'
import { useEffect, useState } from 'react'
import { UserLocationContext } from '../context/UserLocationContext.js'

const raleway = Raleway({ subsets: ['latin'] })

const metadata = {
  title: 'Foodie',
  description: 'Foodie - A Restaurant-Finder Tool by Dann',
}

export default function RootLayout({ children }) {
  const [userLocation, setUserLocation] = useState([]);

  useEffect(() => {
    getUserLocation();
  },[])

  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log(position)
      setUserLocation({
        lat:position.coords.latitude,
        lng:position.coords.longitude
      })
    })
  }

  return (
    <html lang="en">
      <body className={raleway.className}>
        <Provider>
          <UserLocationContext.Provider value={{userLocation, setUserLocation}}>
            <HeaderNavBar />
            {children}
          </UserLocationContext.Provider>
        </Provider>
      </body>
    </html>
  )
}
