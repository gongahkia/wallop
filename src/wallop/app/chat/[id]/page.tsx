"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Send } from "lucide-react"

const mockMatches = [
  { id: 4, name: "Bruce Lee", age: 32, style: "Jeet Kune Do", bio: "Be water, my friend." },
  { id: 5, name: "Muhammad Ali", age: 30, style: "Boxing", bio: "Float like a butterfly, sting like a bee." },
]

export default function IndividualChatPage() {
  const params = useParams()
  const id = Number(params.id)
  const profile = mockMatches.find((match) => match.id === id)
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([])
  const [newMessage, setNewMessage] = useState("")

  if (!profile) {
    return <div>Profile not found</div>
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (newMessage.trim()) {
      setMessages([...messages, { sender: "You", text: newMessage }])
      setNewMessage("")
      // Simulate a response after a short delay
      setTimeout(() => {
        setMessages((prev) => [...prev, { sender: profile.name, text: "Ready to rumble? Let's set up our match!" }])
      }, 1000)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-2xl h-[600px] flex flex-col">
        <CardHeader className="flex flex-row items-center justify-between p-4 border-b">
          <div className="flex items-center">
            <Button asChild variant="ghost" className="mr-2">
              <Link href="/chat">
                <ArrowLeft />
              </Link>
            </Button>
            <h2 className="text-2xl font-bold">{profile.name}</h2>
          </div>
          <div className="text-sm text-gray-500">{profile.style}</div>
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
                    className={`max-w-[70%] p-3 rounded-lg ${message.sender === "You" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                  >
                    <p className="font-bold">{message.sender}</p>
                    <p>{message.text}</p>
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
  )
}