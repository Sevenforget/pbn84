import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Sidebar from "@/components/sidebar"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "여행의 발자국 - 당신의 여행 이야기",
  description: "세계 각지의 여행 경험과 팁을 공유하는 블로그",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen bg-background">
            <Sidebar />
            <main className="flex-1 p-6 md:p-8 lg:p-10">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
