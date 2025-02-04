import { SideNavigation } from "@cloudscape-design/components"

export function Navigation() {
  return (
    <SideNavigation
      header={{ href: "#/", text: "AWS Learning Platform" }}
      items={[
        { type: "link", text: "Dashboard", href: "#/dashboard" },
        { type: "link", text: "Quests", href: "#/quests" },
        { type: "link", text: "Leaderboard", href: "#/leaderboard" },
        { type: "link", text: "Team", href: "#/team" },
        { type: "divider" },
        { type: "link", text: "Profile", href: "#/profile" },
        { type: "link", text: "Settings", href: "#/settings" },
      ]}
    />
  )
}

