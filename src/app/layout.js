import './globals.css'
import { Urbanist } from 'next/font/google'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navber'
import ModalProvider from '@/providers/modal-provider'

const urbanist = Urbanist({ subsets: ['latin'] })

export const metadata = {
  title: 'Store',
  description: 'Store',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <ModalProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
