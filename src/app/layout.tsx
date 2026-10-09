import type { Metadata } from 'next'
import { Outfit, Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
})

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Rwanda Drive - Digital Driving Credentials Platform',
  description:
    'Secure, mobile-first digital portal for Rwandan driving licences, Carte Jaune logbooks, motor insurance, and roadworthiness inspection certificates.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className={`${outfit.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className='min-h-full flex flex-col bg-white text-[#0e1e38] font-sans'>
        {children}
      </body>
    </html>
  )
}
