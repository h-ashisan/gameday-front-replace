"use client"
import {
  AppLayout,
  Box,
  Button,
  ColumnLayout,
  Container,
  Header,
  SpaceBetween,
  StatusIndicator,
  Tabs,
} from "@cloudscape-design/components"
import { Navigation } from "./components/Navigation"

export default function Profile() {
  return (
    <AppLayout
      navigation={<Navigation />}
      content={
        <SpaceBetween size="l">
          <Header variant="h1" actions={<Button variant="primary">Edit Profile</Button>}>
            Profile
          </Header>
          <Container>
            <ColumnLayout columns={2} variant="text-grid">
              <SpaceBetween size="l">
                <div>
                  <Box variant="awsui-key-label">Name</Box>
                  <div>John Doe</div>
                </div>
                <div>
                  <Box variant="awsui-key-label">Email</Box>
                  <div>john.doe@example.com</div>
                </div>
                <div>
                  <Box variant="awsui-key-label">Role</Box>
                  <div>Developer</div>
                </div>
              </SpaceBetween>
              <SpaceBetween size="l">
                <div>
                  <Box variant="awsui-key-label">Total Score</Box>
                  <div>850</div>
                </div>
                <div>
                  <Box variant="awsui-key-label">Quests Completed</Box>
                  <div>12</div>
                </div>
                <div>
                  <Box variant="awsui-key-label">Account Status</Box>
                  <StatusIndicator type="success">Active</StatusIndicator>
                </div>
              </SpaceBetween>
            </ColumnLayout>
          </Container>
          <Tabs
            tabs={[
              {
                label: "Recent Activity",
                id: "recent-activity",
                content: (
                  <Container>
                    <Header variant="h2">Recent Activity</Header>
                    <p>Display recent quests and achievements here.</p>
                  </Container>
                ),
              },
              {
                label: "Achievements",
                id: "achievements",
                content: (
                  <Container>
                    <Header variant="h2">Achievements</Header>
                    <p>Display user achievements and badges here.</p>
                  </Container>
                ),
              },
              {
                label: "Settings",
                id: "settings",
                content: (
                  <Container>
                    <Header variant="h2">Account Settings</Header>
                    <p>Allow users to modify their account settings here.</p>
                  </Container>
                ),
              },
            ]}
          />
        </SpaceBetween>
      }
      toolsHide={true}
      contentType="default"
      headerSelector="#header"
    />
  )
}

