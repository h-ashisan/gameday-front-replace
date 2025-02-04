"use client"

import React from "react"
import {
  AppLayout,
  Box,
  Button,
  Cards,
  Header,
  Link,
  SpaceBetween,
  Pagination,
  TextFilter,
  Select,
} from "@cloudscape-design/components"
import { SideNavigation } from "@cloudscape-design/components"

export default function Quests() {
  const [selectedDifficulty, setSelectedDifficulty] = React.useState({ label: "All", value: "all" })
  const [currentPageIndex, setCurrentPageIndex] = React.useState(1)
  const [filteringText, setFilteringText] = React.useState("")

  const allQuests = [
    {
      name: "EC2 Basics",
      href: "#",
      description: "Learn the fundamentals of Amazon EC2",
      difficulty: "Beginner",
      status: "Not Started",
    },
    {
      name: "S3 Mastery",
      href: "#",
      description: "Master Amazon S3 storage solutions",
      difficulty: "Intermediate",
      status: "In Progress",
    },
    {
      name: "Lambda Functions",
      href: "#",
      description: "Dive into serverless with AWS Lambda",
      difficulty: "Advanced",
      status: "Completed",
    },
    {
      name: "VPC Networking",
      href: "#",
      description: "Understand Virtual Private Cloud networking",
      difficulty: "Intermediate",
      status: "Not Started",
    },
    {
      name: "DynamoDB Deep Dive",
      href: "#",
      description: "Explore Amazon DynamoDB for NoSQL databases",
      difficulty: "Advanced",
      status: "Not Started",
    },
  ]

  const filteredQuests = allQuests.filter(
    (quest) =>
      (selectedDifficulty.value === "all" || quest.difficulty === selectedDifficulty.value) &&
      quest.name.toLowerCase().includes(filteringText.toLowerCase()),
  )

  return (
    <AppLayout
      navigation={<Navigation />}
      content={
        <SpaceBetween size="l">
          <Header variant="h1" actions={<Button variant="primary">Create New Quest</Button>}>
            Quests
          </Header>
          <SpaceBetween size="m" direction="horizontal">
            <TextFilter
              filteringText={filteringText}
              filteringPlaceholder="Find quests"
              filteringAriaLabel="Filter quests"
              onChange={({ detail }) => setFilteringText(detail.filteringText)}
            />
            <Select
              selectedOption={selectedDifficulty}
              onChange={({ detail }) => setSelectedDifficulty(detail.selectedOption)}
              options={[
                { label: "All", value: "all" },
                { label: "Beginner", value: "Beginner" },
                { label: "Intermediate", value: "Intermediate" },
                { label: "Advanced", value: "Advanced" },
              ]}
            />
          </SpaceBetween>
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
                  id: "difficulty",
                  header: "Difficulty",
                  content: (item) => item.difficulty,
                },
                {
                  id: "status",
                  header: "Status",
                  content: (item) => item.status,
                },
              ],
            }}
            cardsPerRow={[{ cards: 1 }, { minWidth: 500, cards: 2 }]}
            items={filteredQuests.slice((currentPageIndex - 1) * 4, currentPageIndex * 4)}
            loadingText="Loading quests"
            empty={
              <Box textAlign="center" color="inherit">
                <b>No quests found</b>
                <Box padding={{ bottom: "s" }} variant="p" color="inherit">
                  No quests match the current filter.
                </Box>
                <Button>Clear filter</Button>
              </Box>
            }
          />
          <Pagination
            currentPageIndex={currentPageIndex}
            onChange={({ detail }) => setCurrentPageIndex(detail.currentPageIndex)}
            pagesCount={Math.ceil(filteredQuests.length / 4)}
          />
        </SpaceBetween>
      }
      toolsHide={true}
      contentType="default"
      headerSelector="#header"
    />
  )
}

function Navigation() {
  return (
    <SideNavigation
      activeHref="#/quest"
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

