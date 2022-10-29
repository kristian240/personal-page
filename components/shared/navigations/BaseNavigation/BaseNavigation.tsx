import { ToggleColorMode } from '@/components/shared/buttons/ToggleColorMode';
import { Box, chakra, Container, ContainerProps, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React, { FC } from 'react';

const NavLink = chakra(Link, {
  baseStyle: {
    p: 2,
    px: 4,
    borderRadius: 'base',
    fontWeight: 'semibold',
    fontSize: 'xl',
    _activeLink: { color: 'activeLink' },
    _hover: {
      textDecoration: 'none',
      backdropBlur: 'sm',
      bg: 'blackAlpha.100',
      _dark: { bg: 'whiteAlpha.100' },
    },
  },
});

export const BaseNavigation: FC<ContainerProps> = ({ ...rest }) => {
  const router = useRouter();

  return (
    <Container as={'nav'} maxW='container.lg' py={4} display='flex' gap={2} {...rest}>
      <NextLink href='/' passHref>
        <NavLink aria-current={router.pathname === '/' ? 'page' : undefined}>Home</NavLink>
      </NextLink>
      {/* <NextLink href='/page' passHref>
        <NavLink aria-current={router.pathname === '/page' ? 'page' : undefined}>
          Some other page
        </NavLink>
      </NextLink> */}

      <Box flex={1} />

      <ToggleColorMode />
    </Container>
  );
};
