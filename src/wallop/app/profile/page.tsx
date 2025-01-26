"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RandomBackground } from "@/components/RandomBackground"
import { Avatar } from "@/components/Avatar"

export default function ProfileAndSettingsPage() {
  const [profile, setProfile] = useState({
    name: "John Doe",
    age: 30,
    style: "Mixed Martial Arts",
    bio: "Ready to rumble!",
    avatar: "/avatars/john-doe.jpg",
  })

  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    location: true,
    privacy: false,
  })

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, [e.target.id]: e.target.value })
  }

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Updated profile:", profile)
    alert("Profile updated successfully!")
  }

  const handleToggle = (setting: keyof typeof settings) => {
    setSettings((prev) => ({ ...prev, [setting]: !prev[setting] }))
  }

  const handleSettingsSave = () => {
    console.log("Updated settings:", settings)
    alert("Settings saved successfully!")
  }

  return (
    <RandomBackground>
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <Card className="w-full max-w-2xl bg-white bg-opacity-90">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">Profile & Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="profile">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
              <TabsContent value="profile">
                <form onSubmit={handleProfileSubmit} className="space-y-4">
                  <div className="flex justify-center mb-4">
                    <Avatar src={profile.avatar} alt={profile.name} size={100} />
                  </div>
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" value={profile.name} onChange={handleProfileChange} />
                  </div>
                  <div>
                    <Label htmlFor="age">Age</Label>
                    <Input id="age" type="number" value={profile.age} onChange={handleProfileChange} />
                  </div>
                  <div>
                    <Label htmlFor="style">Preferred Fighting Style</Label>
                    <Input id="style" value={profile.style} onChange={handleProfileChange} />
                  </div>
                  <div>
                    <Label htmlFor="bio">Bio</Label>
                    <Input id="bio" value={profile.bio} onChange={handleProfileChange} />
                  </div>
                  <Button type="submit">Update Profile</Button>
                </form>
              </TabsContent>
              <TabsContent value="settings">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="notifications">Enable Notifications</Label>
                    <Switch
                      id="notifications"
                      checked={settings.notifications}
                      onCheckedChange={() => handleToggle("notifications")}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="darkMode">Dark Mode</Label>
                    <Switch
                      id="darkMode"
                      checked={settings.darkMode}
                      onCheckedChange={() => handleToggle("darkMode")}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="location">Share Location</Label>
                    <Switch
                      id="location"
                      checked={settings.location}
                      onCheckedChange={() => handleToggle("location")}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="privacy">Private Profile</Label>
                    <Switch id="privacy" checked={settings.privacy} onCheckedChange={() => handleToggle("privacy")} />
                  </div>
                  <Button className="w-full" onClick={handleSettingsSave}>
                    Save Settings
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </RandomBackground>
  )
}