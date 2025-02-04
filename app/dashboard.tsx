"use client"

import React from "react"
import { AppLayout, Box, Button, Cards, Header, Link, SpaceBetween, Table } from "@cloudscape-design/components"
import { SideNavigation } from "@cloudscape-design/components"

export default function Dashboard() {
  return (
    <AppLayout
      navigation={<Navigation />}
      content={<Content />}
      toolsHide={true}
      contentType="default"
      headerSelector="#header"
    />
  )
}

function Navigation() {
  return (
    <SideNavigation
      activeHref="#/dashboard"
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

function Content() {
  return (
    <SpaceBetween size="l">
      <Header variant="h1" actions={<Button variant="primary">Start New Quest</Button>}>
        Dashboard
      </Header>
      <Cards
        cardDefinition={{
          header: (item) => <Link href={item.href}>{item.name}</Link>,
          sections: [
            {
              id: "description",
              header: "Description",
              content: (item) => item.description,
            },
            {
              id: "status",
              header: "Status",
              content: (item) => item.status,
            },
          ],
        }}
        cardsPerRow={[{ cards: 1 }, { minWidth: 500, cards: 2 }]}
        items={[
          {
            name: "EC2 Basics",
            href: "#",
            description: "Learn the fundamentals of Amazon EC2",
            status: "In Progress - 60%",
          },
          {
            name: "S3 Mastery",
            href: "#",
            description: "Master Amazon S3 storage solutions",
            status: "Not Started",
          },
          {
            name: "Lambda Functions",
            href: "#",
            description: "Dive into serverless with AWS Lambda",
            status: "Completed",
          },
        ]}
        loadingText="Loading quests"
        empty={
          <Box textAlign="center" color="inherit">
            <b>No quests</b>
            <Box padding={{ bottom: "s" }} variant="p" color="inherit">
              No quests to display.
            </Box>
            <Button>Create quest</Button>
          </Box>
        }
      />
      <Header variant="h2">Leaderboard</Header>
      <Table
        columnDefinitions={[
          {
            id: "rank",
            header: "Rank",
            cell: (item) => item.rank,
            sortingField: "rank",
          },
          {
            id: "name",
            header: "Name",
            cell: (item) => item.name,
            sortingField: "name",
          },
          {
            id: "score",
            header: "Score",
            cell: (item) => item.score,
            sortingField: "score",
          },
        ]}
        items={[
          { rank: 1, name: "Alice", score: 1000 },
          { rank: 2, name: "Bob", score: 950 },
          { rank: 3, name: "Charlie", score: 900 },
          { rank: 4, name: "David", score: 850 },
          { rank: 5, name: "Eve", score: 800 },
        ]}
        loadingText="Loading leaderboard"
        sortingDisabled
        variant="embedded"
        empty={
          <Box textAlign="center" color="inherit">
            <b>No data</b>
            <Box padding={{ bottom: "s" }} variant="p" color="inherit">
              There is no data to display.
            </Box>
          </Box>
        }
      />
      <Header variant="h2">Team Progress</Header>
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
              header: "Progress",
              content: (item) => item.progress,
            },
          ],
        }}
        cardsPerRow={[{ cards: 1 }, { minWidth: 400, cards: 2 }, { minWidth: 800, cards: 3 }]}
        items={[
          {
            name: "Alice",
            href: "#",
            role: "Team Lead",
            progress: "80%",
          },
          {
            name: "Bob",
            href: "#",
            role: "Developer",
            progress: "65%",
          },
          {
            name: "Charlie",
            href: "#",
            role: "DevOps",
            progress: "70%",
          },
        ]}
        loadingText="Loading team progress"
        empty={
          <Box textAlign="center" color="inherit">
            <b>No team members</b>
            <Box padding={{ bottom: "s" }} variant="p" color="inherit">
              There are no team members to display.
            </Box>
          </Box>
        }
      />
    </SpaceBetween>
  )
}

