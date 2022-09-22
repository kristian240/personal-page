import { Box } from '@chakra-ui/react';
import React, { FC, PropsWithChildren } from 'react';

interface IBaseLayoutProps {}

export const BaseLayout: FC<PropsWithChildren<IBaseLayoutProps>> = ({ children }) => {
  return (
    <>
      {/* <header>
        <nav>Navigation</nav>
      </header> */}

      <Box as='main' flex={1}>
        {children}
      </Box>

      {/* <footer>
        <p>Footer</p>
      </footer> */}
    </>
  );
};
