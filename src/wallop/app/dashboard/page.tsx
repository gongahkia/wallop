"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, BoxIcon as Boxing } from "lucide-react"
import { RandomBackground } from "@/components/RandomBackground"

const mockProfiles = [
  { id: 1, name: "Rocky Balboa", age: 35, style: "Boxing", bio: "Yo Adrian! I did it!" },
  { id: 2, name: "Ip Man", age: 40, style: "Wing Chun", bio: "Be like water, my friend." },
  { id: 3, name: "Beatrix Kiddo", age: 33, style: "Kung Fu", bio: "My name is Buck..." },
]

const mockMatches = [
  { id: 4, name: "Bruce Lee", age: 32, style: "Jeet Kune Do", bio: "Be water, my friend." },
  { id: 5, name: "Muhammad Ali", age: 30, style: "Boxing", bio: "Float like a butterfly, sting like a bee." },
]

export default function Dashboard() {
  const [currentProfile, setCurrentProfile] = useState(0)

  const nextProfile = () => {
    setCurrentProfile((prev) => (prev + 1) % mockProfiles.length)
  }

  const prevProfile = () => {
    setCurrentProfile((prev) => (prev - 1 + mockProfiles.length) % mockProfiles.length)
  }

  const profile = mockProfiles[currentProfile]

  return (
    <RandomBackground>
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-4xl flex flex-col md:flex-row gap-4">
          <Card className="w-full md:w-2/3 bg-white bg-opacity-90">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-2">
                {profile.name}, {profile.age}
              </h2>
              <p className="text-gray-600 mb-4">Preferred style: {profile.style}</p>
              <p className="mb-6">{profile.bio}</p>
              <div className="flex justify-between">
                <Button onClick={prevProfile} variant="outline">
                  <ArrowLeft className="mr-2" /> Pass
                </Button>
                <Button onClick={nextProfile} variant="default">
                  <ArrowRight className="ml-2" /> Challenge
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card className="w-full md:w-1/3 bg-white bg-opacity-90">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Your Matches</h3>
              <ul className="space-y-2">
                {mockMatches.map((match) => (
                  <li key={match.id} className="flex items-center justify-between">
                    <Link href={`/profile/${match.id}`} className="flex items-center space-x-2 hover:underline">
                      <Boxing className="h-5 w-5 text-red-500" />
                      <span>{match.name}</span>
                    </Link>
                    <span className="text-sm text-gray-500">{match.style}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </RandomBackground>
  )
}