import Link from "next/link"
import { Button } from "@/components/ui/button"
import { RandomBackground } from "@/components/RandomBackground"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

const mockChats = [
  { id: 4, name: "Bruce Lee", style: "Jeet Kune Do", lastMessage: "Ready to rumble? Let's set up our match!" },
  { id: 5, name: "Muhammad Ali", style: "Boxing", lastMessage: "Float like a butterfly, sting like a bee." },
]

export default function ChatListPage() {
  return (
    <RandomBackground>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
        <Card className="w-full max-w-2xl">
          <CardHeader>
            <h2 className="text-3xl font-bold">Your Chats</h2>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              {mockChats.map((chat) => (
                <Link key={chat.id} href={`/chat/${chat.id}`} className="block">
                  <Button variant="outline" className="w-full justify-start text-left">
                    <div>
                      <p className="font-bold">{chat.name}</p>
                      <p className="text-sm text-gray-500">{chat.style}</p>
                      <p className="text-sm text-gray-500 truncate">{chat.lastMessage || "No messages yet"}</p>
                    </div>
                  </Button>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </RandomBackground>
  )
}