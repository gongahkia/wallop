"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    location: true,
    privacy: false,
  })

  const handleToggle = (setting: keyof typeof settings) => {
    setSettings((prev) => ({ ...prev, [setting]: !prev[setting] }))
  }

  const handleSave = () => {
    // Here you would typically send the updated settings to your backend
    console.log("Updated settings:", settings)
    alert("Settings saved successfully!")
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardContent className="p-6">
          <h2 className="text-3xl font-bold mb-6">Settings</h2>
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
              <Switch id="darkMode" checked={settings.darkMode} onCheckedChange={() => handleToggle("darkMode")} />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="location">Share Location</Label>
              <Switch id="location" checked={settings.location} onCheckedChange={() => handleToggle("location")} />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="privacy">Private Profile</Label>
              <Switch id="privacy" checked={settings.privacy} onCheckedChange={() => handleToggle("privacy")} />
            </div>
            <Button className="w-full" onClick={handleSave}>
              Save Settings
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}