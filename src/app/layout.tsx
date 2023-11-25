import './globals.css'
import type { Metadata } from 'next'
import { Toaster } from "@/components/ui/toaster"
import ReactQueryProvider from '@/components/providers/ReactQueryProvider'
import FormContextProvider from '@/components/providers/FormContextProvider'
import ActiveStepContextProvider from '@/components/providers/ActiveStepContextProvider'
import KeyContextProvider from '@/components/providers/KeyContextProvider'


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
          <ActiveStepContextProvider>
            <FormContextProvider>
              <KeyContextProvider>
                {children}
              </KeyContextProvider>
            </FormContextProvider>
          </ActiveStepContextProvider>
          <Toaster />
        </ReactQueryProvider>
      </body>
    </html>
  )
}
