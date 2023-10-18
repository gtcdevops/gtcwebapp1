import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ground Transport Concierge Singapore',
  description: 'Singapore Ground Transport Airport Transfer 24 Hours Availability',
  manifest: './manifest.webmanifest.json',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
