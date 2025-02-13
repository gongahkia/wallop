"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Send, Trophy, Frown } from "lucide-react"
import { RandomBackground } from "@/components/RandomBackground"
import { Avatar } from "@/components/Avatar"

const mockMatches = [
  { id: 51, name: "Christofer Loy", age: 34, style: "Shadow Arts", bio: "The unseen strikes the hardest.", avatar: "https://images.pexels.com/photos/2903985/pexels-photo-2903985.jpeg" },
  { id: 52, name: "Sam Sulick", age: 27, style: "Ice Dancer", bio: "Grace in the cold's embrace.", avatar: "https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg" },
  { id: 53, name: "Ah boy", age: 29, style: "Flame Combat", bio: "Burn brighter, fight harder.", avatar: "https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg" },
]

const currentUser = {
  id: 1,
  name: "John Doe",
  avatar: "https://i.pinimg.com/736x/18/16/0b/18160ba745948426c3ff62d666fb2ecf.jpg",
}

export default function IndividualChatPage() {
  const params = useParams()
  const id = Number(params.id)
  const profile = mockMatches.find((match) => match.id === id)
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([])
  const [newMessage, setNewMessage] = useState("")
  const [fightStatus, setFightStatus] = useState<"won" | "lost" | null>(null)

  if (!profile) {
    return <div>Profile not found</div>
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (newMessage.trim()) {
      setMessages([...messages, { sender: "You", text: newMessage }])
      setNewMessage("")
      setTimeout(() => {
        setMessages((prev) => [...prev, { sender: profile.name, text: "Ready to rumble? Let's set up our match!" }])
      }, 1000)
    }
  }

  const handleFightOutcome = (outcome: "won" | "lost") => {
    setFightStatus(outcome)
  }

  return (
    <RandomBackground>
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <Card className="w-full max-w-2xl h-[600px] flex flex-col bg-white bg-opacity-90">
          <CardHeader className="flex flex-row items-center justify-between p-4 border-b">
            <div className="flex items-center space-x-4">
              <Button asChild variant="ghost" className="mr-2">
                <Link href="/chat">
                  <ArrowLeft />
                </Link>
              </Button>
              <Avatar src={profile.avatar} alt={profile.name} size={40} />
              <div>
                <h2 className="text-2xl font-bold">{profile.name}</h2>
                <div className="text-sm text-gray-500">{profile.style}</div>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button
                variant={fightStatus === "won" ? "default" : "outline"}
                size="sm"
                onClick={() => handleFightOutcome("won")}
              >
                <Trophy className="mr-2 w-4 h-4" /> Won
              </Button>
              <Button
                variant={fightStatus === "lost" ? "default" : "outline"}
                size="sm"
                onClick={() => handleFightOutcome("lost")}
              >
                <Frown className="mr-2 w-4 h-4" /> Lost
              </Button>
            </div>
          </CardHeader>
          <CardContent className="flex-grow overflow-y-auto p-4">
            {messages.length === 0 ? (
              <div className="h-full flex items-center justify-center text-gray-500">
                No messages yet. Start the conversation!
              </div>
            ) : (
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div key={index} className={`flex ${message.sender === "You" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`flex items-end space-x-2 ${message.sender === "You" ? "flex-row-reverse" : "flex-row"}`}
                    >
                      <Avatar
                        src={message.sender === "You" ? currentUser.avatar : profile.avatar}
                        alt={message.sender}
                        size={30}
                      />
                      <div
                        className={`max-w-[70%] p-3 rounded-lg ${message.sender === "You" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                      >
                        <p>{message.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
          <CardFooter className="border-t p-4">
            <form onSubmit={handleSendMessage} className="flex w-full gap-2">
              <Input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-grow"
              />
              <Button type="submit">
                <Send className="mr-2" /> Send
              </Button>
            </form>
          </CardFooter>
        </Card>
      </div>
    </RandomBackground>
  )
}