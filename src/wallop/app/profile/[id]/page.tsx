"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, MessageSquare, ThumbsUp, ThumbsDown, Flag } from "lucide-react"
import { RandomBackground } from "@/components/RandomBackground"
import { Avatar } from "@/components/Avatar"

const mockMatches = [
  {
    id: 4,
    name: "Bruce Lee",
    age: 32,
    style: "Jeet Kune Do",
    bio: "Be water, my friend.",
    avatar: "/avatars/bruce-lee.jpg",
  },
  {
    id: 5,
    name: "Muhammad Ali",
    age: 30,
    style: "Boxing",
    bio: "Float like a butterfly, sting like a bee.",
    avatar: "/avatars/muhammad-ali.jpg",
  },
]

export default function ProfilePage() {
  const params = useParams()
  const router = useRouter()
  const id = Number(params.id)
  const profile = mockMatches.find((match) => match.id === id)
  const [isUpvoted, setIsUpvoted] = useState(false)
  const [isDownvoted, setIsDownvoted] = useState(false)
  const [isReported, setIsReported] = useState(false)

  if (!profile) {
    return <div>Profile not found</div>
  }

  const handleUpvote = () => {
    setIsUpvoted(!isUpvoted)
    setIsDownvoted(false)
  }

  const handleDownvote = () => {
    setIsDownvoted(!isDownvoted)
    setIsUpvoted(false)
  }

  const handleReport = () => {
    setIsReported(!isReported)
  }

  const handleStartChat = () => {
    router.push(`/chat/${id}`)
  }

  return (
    <RandomBackground>
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <Card className="w-full max-w-2xl bg-white bg-opacity-90">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-4">
                <Avatar src={profile.avatar} alt={profile.name} size={60} />
                <div>
                  <h2 className="text-3xl font-bold">
                    {profile.name}, {profile.age}
                  </h2>
                  <p className="text-xl text-gray-600">Preferred style: {profile.style}</p>
                </div>
              </div>
              <Button asChild variant="outline">
                <Link href="/dashboard">
                  <ArrowLeft className="mr-2" /> Back
                </Link>
              </Button>
            </div>
            <p className="text-lg mb-6">{profile.bio}</p>
            <div className="flex justify-between items-center">
              <Button variant="default" onClick={handleStartChat}>
                <MessageSquare className="mr-2" /> Start Chat
              </Button>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  className={`transition-all duration-200 ease-in-out transform hover:scale-110 ${isReported ? "bg-yellow-100" : ""}`}
                  onClick={handleReport}
                >
                  <Flag className={`mr-2 ${isReported ? "text-yellow-500" : "text-red-500"}`} />
                  {isReported ? "Reported" : "Report"}
                </Button>
                <Button
                  variant="outline"
                  className={`transition-all duration-200 ease-in-out transform hover:scale-110 ${isUpvoted ? "bg-green-100" : ""}`}
                  onClick={handleUpvote}
                >
                  <ThumbsUp className={`mr-2 ${isUpvoted ? "text-green-500" : ""}`} />
                  {isUpvoted ? "Upvoted" : "Upvote"}
                </Button>
                <Button
                  variant="outline"
                  className={`transition-all duration-200 ease-in-out transform hover:scale-110 ${isDownvoted ? "bg-red-100" : ""}`}
                  onClick={handleDownvote}
                >
                  <ThumbsDown className={`mr-2 ${isDownvoted ? "text-red-500" : ""}`} />
                  {isDownvoted ? "Downvoted" : "Downvote"}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </RandomBackground>
  )
}