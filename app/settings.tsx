"use client"

import React from "react"
import {
  AppLayout,
  Box,
  Button,
  ColumnLayout,
  Container,
  FormField,
  Header,
  Input,
  Select,
  SpaceBetween,
  Toggle,
} from "@cloudscape-design/components"
import { Navigation } from "./components/Navigation"

export default function Settings() {
  const [emailNotifications, setEmailNotifications] = React.useState(true)
  const [theme, setTheme] = React.useState({ label: "Dark", value: "dark" })

  return (
    <AppLayout
      navigation={<Navigation />}
      content={
        <SpaceBetween size="l">
          <Header variant="h1">Settings</Header>
          <Container>
            <SpaceBetween size="l">
              <Header variant="h2">Account Settings</Header>
              <ColumnLayout columns={2} variant="text-grid">
                <SpaceBetween size="l">
                  <FormField label="Email">
                    <Input value="john.doe@example.com" disabled />
                  </FormField>
                  <FormField label="Password">
                    <Button>Change Password</Button>
                  </FormField>
                </SpaceBetween>
                <SpaceBetween size="l">
                  <FormField label="Preferred Language">
                    <Select
                      selectedOption={{ label: "English", value: "en" }}
                      options={[
                        { label: "English", value: "en" },
                        { label: "Spanish", value: "es" },
                        { label: "French", value: "fr" },
                      ]}
                    />
                  </FormField>
                  <FormField label="Time Zone">
                    <Select
                      selectedOption={{ label: "UTC", value: "UTC" }}
                      options={[
                        { label: "UTC", value: "UTC" },
                        { label: "EST", value: "EST" },
                        { label: "PST", value: "PST" },
                      ]}
                    />
                  </FormField>
                </SpaceBetween>
              </ColumnLayout>
            </SpaceBetween>
          </Container>
          <Container>
            <SpaceBetween size="l">
              <Header variant="h2">Preferences</Header>
              <ColumnLayout columns={2} variant="text-grid">
                <SpaceBetween size="l">
                  <FormField label="Theme">
                  <Select
                    selectedOption={theme}
                    onChange={({ detail }) => {
                      if (detail.selectedOption?.label && detail.selectedOption?.value) {
                        setTheme({
                          label: detail.selectedOption.label,
                          value: detail.selectedOption.value,
                        });
                      }
                    }}
                    options={[
                      { label: "Light", value: "light" },
                      { label: "Dark", value: "dark" },
                    ]}
                  />
                  </FormField>
                  <FormField
                    label="Email Notifications"
                    description="Receive email notifications for quest updates and achievements"
                  >
                    <Toggle
                      checked={emailNotifications}
                      onChange={({ detail }) => setEmailNotifications(detail.checked)}
                    >
                      {emailNotifications ? "Enabled" : "Disabled"}
                    </Toggle>
                  </FormField>
                </SpaceBetween>
                <SpaceBetween size="l">
                  <FormField label="Difficulty Preference">
                    <Select
                      selectedOption={{ label: "Balanced", value: "balanced" }}
                      options={[
                        { label: "Easy", value: "easy" },
                        { label: "Balanced", value: "balanced" },
                        { label: "Challenging", value: "challenging" },
                      ]}
                    />
                  </FormField>
                </SpaceBetween>
              </ColumnLayout>
            </SpaceBetween>
          </Container>
          <Box textAlign="right">
            <Button variant="primary">Save Changes</Button>
          </Box>
        </SpaceBetween>
      }
      toolsHide={true}
      contentType="default"
      headerSelector="#header"
    />
  )
}

