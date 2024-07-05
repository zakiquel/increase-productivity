'use client';
import { useEffect, useState } from 'react';

interface UseMountTransitionProps {
  isMounted: boolean;
  unmountDelay: number;
}

export const useMountTransition = (props: UseMountTransitionProps) => {
  const { isMounted, unmountDelay } = props;

  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    if (isMounted && !isTransitioning) {
      setIsTransitioning(true);
    } else if (!isMounted && isTransitioning) {
      timeoutId = setTimeout(() => setIsTransitioning(false), unmountDelay);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [unmountDelay, isMounted, isTransitioning]);

  return isTransitioning;
};
