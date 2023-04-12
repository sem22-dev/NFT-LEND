import './globals.css'
import Navbar from './Navbar/Navbar'
import { Lexend } from "next/font/google"

import { Poppins } from '@next/font/google'

export const metadata = {
  title: 'SageFi',
  description: ' the top-notch liquidity protocol for non-fungible tokens (NFTs), granting NFT holders the leverage to secure cryptocurrency loans from lenders by pledging their NFTs as collateral.',
}

const lexend = Lexend({ 
  subsets: ['latin'],
  weight:['300', '400', '600', '700'],
  variable: "--font-lexend"
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight:['300', '400', '600', '700'],
  variable: "--font-poppins"
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${lexend.variable} ${poppins.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
