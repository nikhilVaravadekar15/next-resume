import './globals.css'
import type { Metadata } from 'next'
import ReactQueryProvider from '@/components/providers/ReactQueryProvider'

export const metadata: Metadata = {
  title: "Next-resume",
  description: "The Ultimate Resume Builder with chatgpt",
  icons: {
    icon: [
      "/favicon.ico"
    ],
    apple: [
      "/apple-touch-icon.png"
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  )
}
