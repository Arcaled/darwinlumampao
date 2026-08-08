import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dropshipping, E-commerce & Digital Marketing Specialists',
  description: 'Scale your online store with high-converting Facebook Ads and expert marketing campaigns.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className={`${inter.className} min-h-screen antialiased text-slate-800 bg-slate-50`}>
        {children}
      </body>
    </html>
  )
}
