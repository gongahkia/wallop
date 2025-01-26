import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RandomBackground } from "@/components/RandomBackground"

export default function AboutPage() {
  return (
    <RandomBackground>
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <Card className="w-full max-w-2xl bg-white bg-opacity-90">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">About Wallop</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-center">
              Wallop is a satirical app concept exploring the absurdity of modern dating apps by 
              transposing their mechanics onto the intentionally preposterous premise of 
              consensual fighting.
            </p>
            <div className="flex flex-col items-center space-y-2">
              <p>
                Source code can be found{" "}
                <Link
                  href="https://github.com/gongahkia/wallop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  here
                </Link>
                .
              </p>
              <p>
                Made by{" "}
                <Link
                  href="https://www.linkedin.com/in/gabriel-zmong/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Gabriel Ong
                </Link>
                .
              </p>
              <p>
                Find out more{" "}
              <Link
                href="https://gongahkia.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                here
              </Link>
              .
              </p>
            </div>
            <p className="text-center text-sm text-gray-500 mt-4">
              Remember: This is a fictional app. Always resolve conflicts peacefully and legally in the real world.
            </p>
          </CardContent>
        </Card>
      </div>
    </RandomBackground>
  )
}