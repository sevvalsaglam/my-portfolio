import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import type React from "react" 

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Şevval Sağlam - Full Stack Developer",
  description: "Full stack developer portfolio showcasing projects and skills",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen font-sans antialiased", inter.className)}>
      <div className="fixed inset-0 -z-10 overflow-hidden">
  <video
    src="/bg/bg-3.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="absolute w-auto min-w-full min-h-full max-w-none object-cover"
  />
</div>

        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
