'use client';

import { useSelectedLayoutSegments } from 'next/navigation';

export function NavigationTitle() {
  const selectedLayoutSegments = useSelectedLayoutSegments();

  if (selectedLayoutSegments.length === 0) {
    return null;
  }

  return <h1 className='text-xl'>Kristian Djaković</h1>;
}
