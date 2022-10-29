import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Icon, IconButton, IconButtonProps, useColorMode } from '@chakra-ui/react';
import { FC } from 'react';

export const ToggleColorMode: FC<Partial<IconButtonProps>> = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      onClick={toggleColorMode}
      aria-label='Toggle color mode'
      variant='ghost'
      icon={colorMode === 'light' ? <Icon as={SunIcon} /> : <Icon as={MoonIcon} />}
      {...props}
    />
  );
};
