"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, MessageSquare, ThumbsUp, ThumbsDown, Flag, Trophy, Frown } from "lucide-react"
import { RandomBackground } from "@/components/RandomBackground"
import { Avatar } from "@/components/Avatar"

const mockMatches = [
  { id: 51, name: "Christofer Loy", age: 34, style: "Shadow Arts", bio: "The unseen strikes the hardest.", avatar: "https://images.pexels.com/photos/2903985/pexels-photo-2903985.jpeg", fightStatus: "won" },
  { id: 52, name: "Sam Sulick", age: 27, style: "Ice Dancer", bio: "Grace in the cold's embrace.", avatar: "https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg", fightStatus: "lost" },
  { id: 53, name: "Ah boy", age: 29, style: "Flame Combat", bio: "Burn brighter, fight harder.", avatar: "https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg", fightStatus: null },
]

export default function ProfilePage() {
  const params = useParams()
  const router = useRouter()
  const id = Number(params.id)
  const profile = mockMatches.find((match) => match.id === id)
  const [isUpvoted, setIsUpvoted] = useState(false)
  const [isDownvoted, setIsDownvoted] = useState(false)
  const [isReported, setIsReported] = useState(false)
  const [fightStatus, setFightStatus] = useState<"won" | "lost" | null>(null)

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

  const handleFightOutcome = (outcome: "won" | "lost") => {
    setFightStatus(outcome)
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
            <div className="flex justify-between items-center mb-4">
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
            <div className="flex justify-center space-x-4">
              <Button variant={fightStatus === "won" ? "default" : "outline"} onClick={() => handleFightOutcome("won")}>
                <Trophy className="mr-2" /> I won
              </Button>
              <Button
                variant={fightStatus === "lost" ? "default" : "outline"}
                onClick={() => handleFightOutcome("lost")}
              >
                <Frown className="mr-2" /> I lost
              </Button>
            </div>
            {fightStatus && (
              <p className="text-center mt-4">
                {fightStatus === "won" ? (
                  <span className="text-green-500">You won against this fighter!</span>
                ) : (
                  <span className="text-red-500">You lost to this fighter.</span>
                )}
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </RandomBackground>
  )
}