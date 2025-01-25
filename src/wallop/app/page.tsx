import Link from "next/link"
import { Button } from "@/components/ui/button"
import { RandomBackground } from "@/components/RandomBackground"

export default function LandingPage() {
  return (
    <RandomBackground>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <main className="text-center">
          <h1 className="text-6xl font-bold text-white mb-4">Wallop</h1>
          <p className="text-2xl text-white mb-8">"Equal rights, equal fights"</p>
          <div className="space-y-4">
            <Button asChild className="w-64">
              <Link href="/disclaimer">Enter the Arena</Link>
            </Button>
            <div className="flex justify-center space-x-4">
              <Button asChild variant="outline">
                <Link href="/signin">Sign In</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/register">Register</Link>
              </Button>
            </div>
          </div>
        </main>
      </div>
    </RandomBackground>
  )
}