import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">About Wallop</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-center">
            Wallop is a satirical app concept exploring the idea of "Equal rights, equal fights" in a humorous and
            fictional context.
          </p>
          <div className="flex flex-col items-center space-y-2">
            <Link
              href="https://github.com/gongahkia/piranesi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Source Code
            </Link>
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
            </p>
            <Link
              href="https://gongahkia.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Find out more here
            </Link>
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">
            Remember: This is a fictional app. Always resolve conflicts peacefully and legally in the real world.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}