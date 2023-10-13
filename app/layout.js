import Provider from './Provider'
import './globals.css'
import { Raleway } from 'next/font/google'
import HeaderNavBar from '../components/HeaderNavBar.js'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata = {
  title: 'Foodie',
  description: 'Restaurant-Finder Tool',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Provider>
          <HeaderNavBar />
          {children}
        </Provider>
      </body>
    </html>
  )
}
