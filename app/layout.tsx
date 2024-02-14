import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { siteConfig } from '@/config/site'

import localFont from 'next/font/local'
const theFont = localFont({ src: '../fonts/TheFont.ttf' })
import { siteData } from '@/config/site'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  creator: siteConfig.creator,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" }
  ],
  openGraph: {
    type: siteConfig.appType,
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: siteConfig.ogImage,
    creator: siteConfig.creator
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png"
  },
 manifest: `${siteConfig.url}/site.webmanifest`
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className={`flex min-h-screen flex-col items-center py-8 px-4 comicDots ${theFont.className}}`}>
          {/* Banner */}
          <section className="z-10 max-w-5xl w-full items-center justify-center text-center sm:text-left sm:items-end sm:justify-end h-64 shadow-hard banner flex flex-col p-2">
            <h1 className={`text-6xl sm:text-7xl drop-shadow-hard ${theFont.className}`}>{siteData.name}</h1>
            <nav className="flex bg-pink-800/50 p-1">
              <Link href="/" className="mx-2 text-xl text-white">Home</Link>
              <Link href="/portfolio" className="mx-2 text-xl text-white">Portfolio</Link>
              <Link href="/press" className="mx-2 text-xl text-white">Press</Link>
            </nav>
          </section>
        {children}
        </main>
      </body>
    </html>
  )
}
