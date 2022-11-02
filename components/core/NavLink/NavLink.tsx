'use client';

import Link, { LinkProps } from 'next/link';
import { useSelectedLayoutSegments } from 'next/navigation';
import { PropsWithChildren, useMemo } from 'react';

export default function NavLink({ href, ...rest }: PropsWithChildren<LinkProps>) {
  const selectedLayoutSegments = useSelectedLayoutSegments();

  const selectedLayoutSegment = useMemo(() => {
    if (selectedLayoutSegments.length === 0) {
      return '';
    }

    return selectedLayoutSegments[0];
  }, [selectedLayoutSegments]);

  const isActive = `/${selectedLayoutSegment}` === href;
  const ariaCurrent = isActive ? 'page' : undefined;

  return (
    <Link
      href={href}
      aria-current={ariaCurrent ? 'page' : undefined}
      className='p-2 rounded-lg aria-current-page:text-black text-black/50  font-semibold hover:bg-sky-50/20'
      {...rest}
    />
  );
}
