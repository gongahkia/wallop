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
  { id: 4, name: "John Wick", age: 45, style: "Gun Fu", bio: "Yeah, I’m thinking I’m back." },
  { id: 5, name: "Jackie Chan", age: 50, style: "Drunken Fist", bio: "I'm not really good at fighting, but I can improvise!" },
  { id: 6, name: "Bruce Lee", age: 32, style: "Jeet Kune Do", bio: "Don't think. Feel!" },
  { id: 7, name: "Chuck Norris", age: 42, style: "Karate", bio: "The world doesn't push me; I push it back." },
  { id: 8, name: "Miyagi", age: 60, style: "Karate", bio: "Wax on, wax off." },
  { id: 9, name: "Conor McGregor", age: 34, style: "MMA", bio: "I'd like to apologize... to absolutely nobody!" },
  { id: 10, name: "Ronda Rousey", age: 36, style: "Judo", bio: "I'm not here to be average; I'm here to be awesome." },
  { id: 11, name: "Anderson Silva", age: 38, style: "Muay Thai", bio: "Precision beats power, and timing beats speed." },
  { id: 12, name: "Mike Tyson", age: 37, style: "Boxing", bio: "Everyone has a plan until they get punched in the face." },
  { id: 13, name: "Daredevil", age: 30, style: "Street Fighting", bio: "Justice is blind, just like me." },
  { id: 14, name: "Eleven", age: 14, style: "Psychokinesis", bio: "Friends don't lie." },
  { id: 15, name: "Lara Croft", age: 29, style: "Dual Pistols", bio: "I'm not afraid of tombs or trouble." },
  { id: 16, name: "Terry Bogard", age: 28, style: "Brawler", bio: "Are you okay? Buster Wolf!" },
  { id: 17, name: "Sub-Zero", age: 35, style: "Cryomancer", bio: "Feel the chill of despair." },
  { id: 18, name: "Scorpion", age: 37, style: "Ninjutsu", bio: "Get over here!" },
  { id: 19, name: "Kratos", age: 42, style: "Spartan Rage", bio: "Boy, we must be better." },
  { id: 20, name: "Ezio Auditore", age: 26, style: "Assassin", bio: "Requiescat in pace." },
  { id: 21, name: "Nathan Drake", age: 32, style: "Adventurer", bio: "Greatness from small beginnings." },
  { id: 22, name: "Jean-Claude Van Damme", age: 41, style: "Kickboxing", bio: "Time to split!" }
];

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