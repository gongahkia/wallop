import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { RandomBackground } from "@/components/RandomBackground"
import { Avatar } from "@/components/Avatar"

const mockChats = [
  {
    id: 4,
    name: "Bruce Lee",
    style: "Jeet Kune Do",
    lastMessage: "Ready to rumble? Let's set up our match!",
    avatar: "/avatars/bruce-lee.jpg",
  },
  {
    id: 5,
    name: "Muhammad Ali",
    style: "Boxing",
    lastMessage: "Float like a butterfly, sting like a bee.",
    avatar: "/avatars/muhammad-ali.jpg",
  },
]

export default function ChatListPage() {
  return (
    <RandomBackground>
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <Card className="w-full max-w-2xl bg-white bg-opacity-90">
          <CardHeader>
            <h2 className="text-3xl font-bold">Your Chats</h2>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              {mockChats.map((chat) => (
                <Link key={chat.id} href={`/chat/${chat.id}`} className="block">
                  <Button variant="outline" className="w-full justify-start text-left">
                    <div className="flex items-center space-x-4">
                      <Avatar src={chat.avatar} alt={chat.name} size={40} />
                      <div>
                        <p className="font-bold">{chat.name}</p>
                        <p className="text-sm text-gray-500">{chat.style}</p>
                        <p className="text-sm text-gray-500 truncate">{chat.lastMessage || "No messages yet"}</p>
                      </div>
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