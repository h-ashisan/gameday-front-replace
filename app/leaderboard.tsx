"use client"

import React from "react"
import {
  AppLayout,
  Box,
  Button,
  Header,
  SpaceBetween,
  Table,
  Pagination,
  TextFilter,
} from "@cloudscape-design/components"
import { Navigation } from "./components/Navigation"

export default function Leaderboard() {
  const [currentPageIndex, setCurrentPageIndex] = React.useState(1)
  const [filteringText, setFilteringText] = React.useState("")

  const allUsers = [
    { rank: 1, name: "Alice", score: 1000, quests: 15 },
    { rank: 2, name: "Bob", score: 950, quests: 14 },
    { rank: 3, name: "Charlie", score: 900, quests: 13 },
    { rank: 4, name: "David", score: 850, quests: 12 },
    { rank: 5, name: "Eve", score: 800, quests: 11 },
    { rank: 6, name: "Frank", score: 750, quests: 10 },
    { rank: 7, name: "Grace", score: 700, quests: 9 },
    { rank: 8, name: "Henry", score: 650, quests: 8 },
    { rank: 9, name: "Ivy", score: 600, quests: 7 },
    { rank: 10, name: "Jack", score: 550, quests: 6 },
  ]

  const filteredUsers = allUsers.filter((user) => user.name.toLowerCase().includes(filteringText.toLowerCase()))

  return (
    <AppLayout
      navigation={<Navigation />}
      content={
        <SpaceBetween size="l">
          <Header variant="h1">Leaderboard</Header>
          <TextFilter
            filteringText={filteringText}
            filteringPlaceholder="Find users"
            filteringAriaLabel="Filter users"
            onChange={({ detail }) => setFilteringText(detail.filteringText)}
          />
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
              {
                id: "quests",
                header: "Quests Completed",
                cell: (item) => item.quests,
                sortingField: "quests",
              },
            ]}
            items={filteredUsers.slice((currentPageIndex - 1) * 5, currentPageIndex * 5)}
            loadingText="Loading leaderboard"
            sortingDisabled
            variant="full-page"
            empty={
              <Box textAlign="center" color="inherit">
                <b>No users found</b>
                <Box padding={{ bottom: "s" }} variant="p" color="inherit">
                  No users match the current filter.
                </Box>
                <Button onClick={() => setFilteringText("")}>Clear filter</Button>
              </Box>
            }
            header={
              <Header counter={`(${filteredUsers.length})`} actions={<Button>Refresh</Button>}>
                Top Players
              </Header>
            }
          />
          <Pagination
            currentPageIndex={currentPageIndex}
            onChange={({ detail }) => setCurrentPageIndex(detail.currentPageIndex)}
            pagesCount={Math.ceil(filteredUsers.length / 5)}
          />
        </SpaceBetween>
      }
      toolsHide={true}
      contentType="default"
      headerSelector="#header"
    />
  )
}

