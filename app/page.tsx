"use client"

import React from "react"
import { useRouter } from "next/navigation"
import Dashboard from "./dashboard"
import Quests from "./quests"
import Leaderboard from "./leaderboard"
import Team from "./team"
import Profile from "./profile"
import Settings from "./settings"

export default function Home() {
  const router = useRouter()
  const [currentPage, setCurrentPage] = React.useState("dashboard")

  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(2) // Remove '#/' from the hash
      setCurrentPage(hash || "dashboard")
    }

    window.addEventListener("hashchange", handleHashChange)
    handleHashChange() // Call once to set initial state

    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <Dashboard />
      case "quests":
        return <Quests />
      case "leaderboard":
        return <Leaderboard />
      case "team":
        return <Team />
      case "profile":
        return <Profile />
      case "settings":
        return <Settings />
      default:
        return <Dashboard />
    }
  }

  return renderPage()
}

