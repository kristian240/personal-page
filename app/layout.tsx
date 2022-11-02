import 'styles/globals.css';

import NavLink from '@/components/core/NavLink/NavLink';
import { PropsWithChildren } from 'react';
import { NavigationTitle } from '@/app/navigation-title';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html>
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <head>
        <title>Kristian Djaković</title>
      </head>

      <body className='min-h-screen flex flex-col'>
        {/* <div className='bg-sky-300'>
          <header className='px-4 max-w-4xl mx-auto flex items-center'>
            <NavigationTitle />

            <div className='flex-1' />

            <nav className='flex py-4 text-xl'>
              <NavLink href='/'>Home</NavLink>
              <NavLink href='/about-me'>About</NavLink>
            </nav>
          </header>
        </div> */}

        <main className='flex-1'>{children}</main>
      </body>
    </html>
  );
}
