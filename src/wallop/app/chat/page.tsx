import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { RandomBackground } from "@/components/RandomBackground"
import { Avatar } from "@/components/Avatar"
import { Trophy, Frown } from "lucide-react"

const mockChats = [
  { id: 51, name: "Elias Drake", age: 34, style: "Shadow Arts", bio: "The unseen strikes the hardest.", avatar: "https://images.pexels.com/photos/2903985/pexels-photo-2903985.jpeg", fightStatus: "won" },
  { id: 52, name: "Selina Frost", age: 27, style: "Ice Dancer", bio: "Grace in the cold's embrace.", avatar: "https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg", fightStatus: "lost" },
  { id: 53, name: "Axel Fury", age: 29, style: "Flame Combat", bio: "Burn brighter, fight harder.", avatar: "https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg", fightStatus: null },
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
                      <div className="flex-grow">
                        <div className="flex justify-between items-center">
                          <p className="font-bold">{chat.name}</p>
                          {chat.fightStatus && (
                            <span
                              className={`text-xs ${chat.fightStatus === "won" ? "text-green-500" : "text-red-500"}`}
                            >
                              {chat.fightStatus === "won" ? (
                                <Trophy className="w-4 h-4" />
                              ) : (
                                <Frown className="w-4 h-4" />
                              )}
                            </span>
                          )}
                        </div>
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