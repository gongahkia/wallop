import "./globals.css"
import { Inter } from "next/font/google"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Wallop - Equal rights, equal fights",
  description: "A satirical app for fictional friendly fisticuffs",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-purple-600 p-4 text-white fixed top-0 left-0 right-0 z-10">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">
              Wallop
            </Link>
            <div className="space-x-4">
              <Link href="/dashboard" className="hover:underline">
                Dashboard
              </Link>
              <Link href="/chat" className="hover:underline">
                Chats
              </Link>
              <Link href="/profile" className="hover:underline">
                Profile & Settings
              </Link>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </div>
          </div>
        </nav>
        <main className="pt-16">{children}</main>
      </body>
    </html>
  )
}