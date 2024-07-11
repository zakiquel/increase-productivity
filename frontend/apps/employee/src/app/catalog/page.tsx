'use client'
import { useRouter } from 'next/navigation'
import { getProductPath } from '@/shared/const/route'
import { useEffect } from 'react'

const Page = () => {
  const router = useRouter()
  useEffect(() => {
    router.replace(getProductPath())
  }, [])
  return <div></div>
}

export default Page
