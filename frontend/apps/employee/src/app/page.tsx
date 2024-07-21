'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { getEventsPath } from '@/shared/const/route';

const Page = () => {
  const router = useRouter();
  useEffect(() => {
    router.replace(getEventsPath());
  }, [router]);
  return <div />;
};

export default Page;
