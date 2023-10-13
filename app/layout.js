import Provider from './Provider'
import './globals.css'
import { Inter } from 'next/font/google'
import HeaderNavBar from '../components/HeaderNavBar.js'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Foodie',
  description: 'Restaurant-Finder Tool',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <HeaderNavBar />
          {children}
        </Provider>
      </body>
    </html>
  )
}
