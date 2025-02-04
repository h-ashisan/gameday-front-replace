"use client"

import React from "react"
import { applyMode, Mode } from "@cloudscape-design/global-styles"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  React.useEffect(() => {
    applyMode(Mode.Dark)
  }, [])

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

