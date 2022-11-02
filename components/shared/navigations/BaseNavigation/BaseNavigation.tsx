import { ToggleColorMode } from '@/components/shared/buttons/ToggleColorMode';
import { Box, chakra, Container, ContainerProps, HTMLChakraProps, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { FC } from 'react';

const NavLinkStyle = chakra('a', {
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

const NavLink: FC<HTMLChakraProps<'a'>> = ({ href, ...rest }) => {
  const selectedLayoutSegment = useSelectedLayoutSegment();

  const isActive = `/${selectedLayoutSegment}` === href;
  const ariaCurrent = isActive ? 'page' : undefined;

  return (
    <NavLinkStyle as={NextLink} href={href} aria-current={ariaCurrent} {...rest}>
      Home
    </NavLinkStyle>
  );
};

export const BaseNavigation: FC<ContainerProps> = ({ ...rest }) => {
  return (
    <Container as={'nav'} maxW='container.lg' py={4} display='flex' gap={2} {...rest}>
      <NavLink as={NextLink} href='/'>
        Home
      </NavLink>

      <NavLink as={NextLink} href='/about'>
        About me
      </NavLink>

      <Box flex={1} />

      <ToggleColorMode />
    </Container>
  );
};
