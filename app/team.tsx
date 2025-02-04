"use client"
import { AppLayout, Box, Button, Cards, Header, Link, SpaceBetween, ProgressBar } from "@cloudscape-design/components"
import { Navigation } from "./components/Navigation"

export default function Team() {
  const teamMembers = [
    {
      name: "Alice",
      role: "Team Lead",
      progress: 80,
      quests: 12,
      href: "#",
    },
    {
      name: "Bob",
      role: "Developer",
      progress: 65,
      quests: 9,
      href: "#",
    },
    {
      name: "Charlie",
      role: "DevOps",
      progress: 70,
      quests: 10,
      href: "#",
    },
    {
      name: "David",
      role: "QA Engineer",
      progress: 55,
      quests: 7,
      href: "#",
    },
  ]

  return (
    <AppLayout
      navigation={<Navigation />}
      content={
        <SpaceBetween size="l">
          <Header variant="h1" actions={<Button variant="primary">Invite Team Member</Button>}>
            Team
          </Header>
          <Cards
            cardDefinition={{
              header: (item) => <Link href={item.href}>{item.name}</Link>,
              sections: [
                {
                  id: "role",
                  header: "Role",
                  content: (item) => item.role,
                },
                {
                  id: "progress",
                  header: "Overall Progress",
                  content: (item) => (
                    <ProgressBar
                      value={item.progress}
                      label={`${item.progress}%`}
                      description={`${item.quests} quests completed`}
                    />
                  ),
                },
              ],
            }}
            cardsPerRow={[{ cards: 1 }, { minWidth: 500, cards: 2 }]}
            items={teamMembers}
            loadingText="Loading team members"
            empty={
              <Box textAlign="center" color="inherit">
                <b>No team members</b>
                <Box padding={{ bottom: "s" }} variant="p" color="inherit">
                  Your team doesnt have any members yet.
                </Box>
                <Button>Invite team members</Button>
              </Box>
            }
            header={<Header counter={`(${teamMembers.length})`}>Team Members</Header>}
          />
        </SpaceBetween>
      }
      toolsHide={true}
      contentType="default"
      headerSelector="#header"
    />
  )
}

