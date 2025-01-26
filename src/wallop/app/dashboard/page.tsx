"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, BoxIcon as Boxing, Trophy, Frown } from "lucide-react"
import { RandomBackground } from "@/components/RandomBackground"
import { Avatar } from "@/components/Avatar"

const mockProfiles = [
  { id: 1, name: "Kai Dusk", age: 28, style: "Shadow Boxing", bio: "The shadows are my allies.", avatar: "https://images.pexels.com/photos/4016579/pexels-photo-4016579.jpeg", fightStatus: null },
  { id: 2, name: "Mina Azure", age: 30, style: "Aikido", bio: "Harmony is the ultimate strength.", avatar: "https://images.pexels.com/photos/7004697/pexels-photo-7004697.jpeg", fightStatus: null },
  { id: 3, name: "Zane Riven", age: 33, style: "Kickboxing", bio: "No risk, no reward.", avatar: "https://images.pexels.com/photos/3794359/pexels-photo-3794359.jpeg", fightStatus: null },
  { id: 4, name: "Nia Storm", age: 26, style: "Capoeira", bio: "Dance through the fight.", avatar: "https://images.pexels.com/photos/30385785/pexels-photo-30385785/free-photo-of-abstract-blue-and-white-marble-texture-art.jpeg", fightStatus: null },
  { id: 5, name: "Jin Kaida", age: 34, style: "Samurai Swordsmanship", bio: "Honor is my blade.", avatar: "https://images.pexels.com/photos/4238994/pexels-photo-4238994.jpeg", fightStatus: "won" },
  { id: 6, name: "Liora Ash", age: 29, style: "Mixed Martial Arts", bio: "Adapt and overcome.", avatar: "https://images.pexels.com/photos/5699519/pexels-photo-5699519.jpeg", fightStatus: null },
  { id: 7, name: "Darius Vale", age: 38, style: "Brawler", bio: "Hit hard. Hit fast.", avatar: "https://images.pexels.com/photos/3799324/pexels-photo-3799324.jpeg", fightStatus: "lost" },
  { id: 8, name: "Akira Zen", age: 35, style: "Karate", bio: "Focus is the key to strength.", avatar: "https://images.pexels.com/photos/4386408/pexels-photo-4386408.jpeg", fightStatus: null },
  { id: 9, name: "Talia Frost", age: 27, style: "Cryomancer", bio: "Cold justice, served swiftly.", avatar: "https://images.pexels.com/photos/3852577/pexels-photo-3852577.jpeg", fightStatus: "won" },
  { id: 10, name: "Arden Flare", age: 32, style: "Pyromancer", bio: "The fire inside burns brightest.", avatar: "https://images.pexels.com/photos/6120220/pexels-photo-6120220.jpeg", fightStatus: null },
  { id: 11, name: "Kane Draven", age: 36, style: "Street Fighting", bio: "There’s no rules in survival.", avatar: "https://images.pexels.com/photos/5725821/pexels-photo-5725821.jpeg", fightStatus: null },
  { id: 12, name: "Selene Voss", age: 28, style: "Ninjutsu", bio: "Silence is my deadliest weapon.", avatar: "https://images.pexels.com/photos/6387849/pexels-photo-6387849.jpeg", fightStatus: null },
  { id: 13, name: "Liam Cross", age: 37, style: "Boxing", bio: "Every punch tells a story.", avatar: "https://images.pexels.com/photos/6045281/pexels-photo-6045281.jpeg", fightStatus: null },
  { id: 14, name: "Elara Wren", age: 25, style: "Judo", bio: "Grace meets power.", avatar: "https://images.pexels.com/photos/5870547/pexels-photo-5870547.jpeg", fightStatus: null },
  { id: 15, name: "Ronan Blade", age: 31, style: "Swordsmanship", bio: "Sharp steel, sharper mind.", avatar: "https://images.pexels.com/photos/6432077/pexels-photo-6432077.jpeg", fightStatus: "lost" },
  { id: 16, name: "Aya Shadow", age: 33, style: "Assassin", bio: "The darkness hides my blade.", avatar: "https://images.pexels.com/photos/39675/rubber-bands-elastic-bands-office-supplies-stationery-39675.jpeg", fightStatus: null },
  { id: 17, name: "Orin Vex", age: 29, style: "Spartan Combat", bio: "The past forged my strength.", avatar: "https://images.pexels.com/photos/5477777/pexels-photo-5477777.jpeg", fightStatus: null },
  { id: 18, name: "Zara Ember", age: 26, style: "Fire Dance", bio: "Every move ignites the battlefield.", avatar: "https://images.pexels.com/photos/6664246/pexels-photo-6664246.jpeg", fightStatus: null },
  { id: 19, name: "Finn Claw", age: 35, style: "Brawler", bio: "Fight like there’s no tomorrow.", avatar: "https://images.pexels.com/photos/7047194/pexels-photo-7047194.jpeg", fightStatus: null },
  { id: 20, name: "Lila Ardent", age: 24, style: "Kung Fu", bio: "Calm mind, swift strike.", avatar: "https://images.pexels.com/photos/20023288/pexels-photo-20023288/free-photo-of-a-jar-and-dice.jpeg", fightStatus: null },
  { id: 21, name: "Jarek Forge", age: 42, style: "Blacksmith Combat", bio: "Hammer and anvil, my tools of war.", avatar: "https://images.pexels.com/photos/6325944/pexels-photo-6325944.jpeg", fightStatus: null },
  { id: 22, name: "Eve Nightshade", age: 29, style: "Tactical Combat", bio: "Precision is everything.", avatar: "https://images.pexels.com/photos/5870534/pexels-photo-5870534.jpeg", fightStatus: null },
  { id: 23, name: "Xander Volt", age: 31, style: "Electromancer", bio: "Power surges through me.", avatar: "https://images.pexels.com/photos/5583078/pexels-photo-5583078.jpeg", fightStatus: null },
  { id: 24, name: "Kael Striker", age: 34, style: "Gun Fu", bio: "Bullets dance at my command.", avatar: "https://images.pexels.com/photos/4040890/pexels-photo-4040890.jpeg", fightStatus: null },
  { id: 25, name: "Lyra Mist", age: 28, style: "Mystic Arts", bio: "The unseen guides me.", avatar: "https://images.pexels.com/photos/776110/pexels-photo-776110.jpeg", fightStatus: "lost" },
  { id: 26, name: "Rowan Creed", age: 30, style: "Mercenary Tactics", bio: "I fight for no one but myself.", avatar: "https://via.placeholder.com/150?text=Rowan+Creed", fightStatus: null },
  { id: 27, name: "Isla Vane", age: 25, style: "Psychokinesis", bio: "The mind bends the world.", avatar: "https://via.placeholder.com/150?text=Isla+Vane", fightStatus: null },
  { id: 28, name: "Sylas Thorn", age: 36, style: "Beastmaster", bio: "I command nature’s fury.", avatar: "https://via.placeholder.com/150?text=Sylas+Thorn", fightStatus: null },
  { id: 29, name: "Aria Cinder", age: 27, style: "Fire Dance", bio: "The flame never dies.", avatar: "https://via.placeholder.com/150?text=Aria+Cinder", fightStatus: null },
  { id: 30, name: "Drake Valor", age: 39, style: "Knight’s Combat", bio: "Courage is my shield.", avatar: "https://via.placeholder.com/150?text=Drake+Valor", fightStatus: null },
  { id: 31, name: "Kira Shadowfang", age: 29, style: "Dual Blades", bio: "No prey escapes the hunt.", avatar: "https://via.placeholder.com/150?text=Kira+Shadowfang", fightStatus: null },
  { id: 32, name: "Viktor Grimm", age: 41, style: "Barbarian Rage", bio: "Chaos fuels my strength.", avatar: "https://via.placeholder.com/150?text=Viktor+Grimm", fightStatus: null },
  { id: 33, name: "Tess Mirage", age: 28, style: "Illusions", bio: "Reality is what I make it.", avatar: "https://via.placeholder.com/150?text=Tess+Mirage", fightStatus: null },
  { id: 34, name: "Rion Stormblade", age: 34, style: "Sky Combat", bio: "I strike from above.", avatar: "https://via.placeholder.com/150?text=Rion+Stormblade", fightStatus: null },
  { id: 35, name: "Kyla Aether", age: 27, style: "Airbender", bio: "The wind whispers my name.", avatar: "https://via.placeholder.com/150?text=Kyla+Aether", fightStatus: null },
  { id: 36, name: "Damien Frost", age: 36, style: "Ice Combat", bio: "Winter is my weapon.", avatar: "https://via.placeholder.com/150?text=Damien+Frost", fightStatus: null },
  { id: 37, name: "Asha Zenith", age: 31, style: "Energy Manipulation", bio: "The universe flows through me.", avatar: "https://via.placeholder.com/150?text=Asha+Zenith", fightStatus: null },
  { id: 38, name: "Corbin Ash", age: 33, style: "Inferno Mastery", bio: "Ashes will remain.", avatar: "https://via.placeholder.com/150?text=Corbin+Ash", fightStatus: null },
  { id: 39, name: "Ziva Spectre", age: 29, style: "Ghost Combat", bio: "Fear what you cannot see.", avatar: "https://via.placeholder.com/150?text=Ziva+Spectre", fightStatus: null },
  { id: 40, name: "Eldon Fury", age: 39, style: "Colossus Strength", bio: "Strength unmatched.", avatar: "https://via.placeholder.com/150?text=Eldon+Fury", fightStatus: null },
  { id: 41, name: "Cassian Rogue", age: 32, style: "Blade Dance", bio: "Elegance in every cut.", avatar: "https://via.placeholder.com/150?text=Cassian+Rogue", fightStatus: null },
  { id: 42, name: "Liora Emberlight", age: 29, style: "Battle Mage", bio: "Magic and might combined.", avatar: "https://via.placeholder.com/150?text=Liora+Emberlight", fightStatus: null },
  { id: 43, name: "Talon Pierce", age: 35, style: "Precision Archery", bio: "One shot, one kill.", avatar: "https://via.placeholder.com/150?text=Talon+Pierce", fightStatus: null },
  { id: 44, name: "Vera Huntress", age: 28, style: "Tracker’s Fury", bio: "No trail goes cold.", avatar: "https://via.placeholder.com/150?text=Vera+Huntress", fightStatus: null },
  { id: 45, name: "Eryx Steel", age: 30, style: "Iron Defense", bio: "Unbreakable, unstoppable.", avatar: "https://via.placeholder.com/150?text=Eryx+Steel", fightStatus: null },
  { id: 46, name: "Amara Flux", age: 27, style: "Kinetic Arts", bio: "Momentum is my weapon.", avatar: "https://via.placeholder.com/150?text=Amara+Flux", fightStatus: null },
  { id: 47, name: "Damon Vortex", age: 36, style: "Stormcaller", bio: "The storm bends to my will.", avatar: "https://via.placeholder.com/150?text=Damon+Vortex", fightStatus: null },
  { id: 48, name: "Reina Solis", age: 31, style: "Solar Arts", bio: "The sun guides my fury.", avatar: "https://via.placeholder.com/150?text=Reina+Solis", fightStatus: null },
  { id: 49, name: "Taron Vale", age: 37, style: "Stone Combat", bio: "Rock-solid strength.", avatar: "https://via.placeholder.com/150?text=Taron+Vale", fightStatus: null },
  { id: 50, name: "Ivy Shade", age: 28, style: "Venomous Combat", bio: "Poison is my signature.", avatar: "https://via.placeholder.com/150?text=Ivy+Shade", fightStatus: null },
];

const mockMatches = [
  { id: 51, name: "Elias Drake", age: 34, style: "Shadow Arts", bio: "The unseen strikes the hardest.", avatar: "https://images.pexels.com/photos/2903985/pexels-photo-2903985.jpeg", fightStatus: "won" },
  { id: 52, name: "Selina Frost", age: 27, style: "Ice Dancer", bio: "Grace in the cold's embrace.", avatar: "https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg", fightStatus: "lost" },
  { id: 53, name: "Axel Fury", age: 29, style: "Flame Combat", bio: "Burn brighter, fight harder.", avatar: "https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg", fightStatus: null },
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
              <div className="flex items-center space-x-4 mb-4">
                <Avatar src={profile.avatar} alt={profile.name} size={80} />
                <div>
                  <h2 className="text-2xl font-bold">
                    {profile.name}, {profile.age}
                  </h2>
                  <p className="text-gray-600">Preferred style: {profile.style}</p>
                  {profile.fightStatus && (
                    <p className="text-sm mt-1">
                      {profile.fightStatus === "won" ? (
                        <span className="text-green-500 flex items-center">
                          <Trophy className="w-4 h-4 mr-1" /> You won against this fighter
                        </span>
                      ) : (
                        <span className="text-red-500 flex items-center">
                          <Frown className="w-4 h-4 mr-1" /> You lost to this fighter
                        </span>
                      )}
                    </p>
                  )}
                </div>
              </div>
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
                      <Avatar src={match.avatar} alt={match.name} size={40} />
                      <div>
                        <span>{match.name}</span>
                        {match.fightStatus && (
                          <p className="text-xs">
                            {match.fightStatus === "won" ? (
                              <span className="text-green-500 flex items-center">
                                <Trophy className="w-3 h-3 mr-1" /> Won
                              </span>
                            ) : (
                              <span className="text-red-500 flex items-center">
                                <Frown className="w-3 h-3 mr-1" /> Lost
                              </span>
                            )}
                          </p>
                        )}
                      </div>
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

