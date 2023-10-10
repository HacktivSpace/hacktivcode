import Providers from '@/components/Providers'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'HacktivCode',
  description: 'Code, Design, and Coffee',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className = 'zero'>
      <body className={inter.className}>
        <Providers >
          {children}
        </Providers>

      </body>
    </html>
  )
}
