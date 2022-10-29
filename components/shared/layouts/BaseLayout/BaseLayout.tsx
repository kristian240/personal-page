import { Box } from '@chakra-ui/react';
import React, { FC, PropsWithChildren } from 'react';

interface IBaseLayoutProps {
  navigation?: React.ReactNode;
}

export const BaseLayout: FC<PropsWithChildren<IBaseLayoutProps>> = ({ children, navigation }) => {
  return (
    <>
      <header>{navigation}</header>

      <Box as='main' flex={1}>
        {children}
      </Box>

      {/* <footer>
        <p>Footer</p>
      </footer> */}
    </>
  );
};
