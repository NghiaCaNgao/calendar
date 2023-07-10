import ConfigurationProvider from "@/app/hooks/configuration";
import StudentProvider from  "@/app/hooks/student"
import { Kanit } from 'next/font/google'

import './globals.css'
import "animate.css";

export const metadata = {
  title: 'Calendar Maker',
  description: 'Auto generate calendar for UET students',
}

const kanit = Kanit({
  subsets: ['vietnamese'],
  weight: ["100", "200", "300", "400", "500", "600"],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={kanit.className}>
        <ConfigurationProvider>
          <StudentProvider>
            {children}
          </StudentProvider>
        </ConfigurationProvider>
      </body>
    </html>
  )
}
