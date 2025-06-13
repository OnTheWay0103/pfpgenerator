import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import GoogleAnalytics from './components/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Image Generator | Free AI Profile Picture Maker & Art Generator',
  description: 'Create stunning AI-generated images, profile pictures, and art with our free AI image generator. No signup required. Transform your photos into professional profile pictures using artificial intelligence.',
  keywords: 'ai image generator, ai picture generator, free ai generator, ai image generator from image, ai generated images, ai art generator, ai profile picture maker, ai pfp maker, free ai image generator no signup, ai photo generator online, create ai images from text free, artificial intelligence image generator',
  openGraph: {
    title: 'AI Image Generator | Free AI Profile Picture Maker & Art Generator',
    description: 'Create stunning AI-generated images, profile pictures, and art with our free AI image generator. No signup required.',
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'G-WNDS4NKD0G',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  )
} 