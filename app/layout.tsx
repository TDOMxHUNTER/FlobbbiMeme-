
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FlobbiMeme',
  description: 'Next.js app with Three.js hyperspeed background',
  icons: {
    icon: '/flobbi.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
