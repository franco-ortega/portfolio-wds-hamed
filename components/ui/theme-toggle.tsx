'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Button } from './button'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'

type Props = {}

export default function ThemeToggle({}: Props) {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Button
      size={'sm'}
      variant={'ghost'}
      onClick={() => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
      }}
    >
      {resolvedTheme === 'dark' ? (
        <SunIcon className='size-4 text-orange-300' />
      ) : (
        <MoonIcon className='size-4 text-sky-950' />
      )}
      <span className='sr-only'>Toggle theme</span>
    </Button>
  )
}
