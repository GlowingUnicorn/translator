import React from 'react'
import TranslateIcon from '@mui/icons-material/Translate'
import { Settings } from '@mui/icons-material'

export const GOOGLE_TRANSLATE_API_KEY = 'f6e0ebe1ea1cb38cb9b2ea4873995c535ab2573d' as const

export const urls = {
  home: '/',
  settings: '/settings'
} as const

export const sideMenuItems = [
  { url: urls.home, label: 'Translate', icon: <TranslateIcon /> },
  { url: urls.settings, label: 'Settings', icon: <Settings /> }
] as const
