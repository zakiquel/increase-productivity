'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

import { getProductPath } from '@/shared/const/route'

const Page = () => {
  const router = useRouter()
  useEffect(() => {
    router.replace(getProductPath())
  }, [router])
  return <div />
}

export default Page
