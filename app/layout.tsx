import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'White Shining',
  description: 'White Shining',
  generator: 'make4ryan',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
