'use client'

import { useEffect, ReactNode } from 'react'
import { getAnalytics } from "firebase/analytics";
import { firebase } from '@/hooks/firebase';

interface FirebaseAnalyticsProps {
  children: ReactNode
}

export function FirebaseAnalytics ({children}: FirebaseAnalyticsProps) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      getAnalytics(firebase)
    }
  }, [])

  return (
    <main>
      {children}
    </main>
  )
}