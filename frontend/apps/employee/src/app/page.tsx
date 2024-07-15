'use client'
import { useRouter } from 'next/navigation'
import { getEventsPath } from '@/shared/const/route'
import { useEffect } from 'react'

const Page = () => {
  const router = useRouter()
  useEffect(() => {
    router.replace(getEventsPath())
  }, [])
  return <div></div>
}

export default Page
