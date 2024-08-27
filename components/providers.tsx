'use client'

import React from 'react'
import { ThemeProvider } from 'next-themes'

type Props = {
  children: React.ReactNode
}

export default function providers({ children }: Props) {
  return (
    <ThemeProvider
      enableSystem
      attribute='class'
      defaultTheme='system'
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  )
}
