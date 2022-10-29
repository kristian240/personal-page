import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { DefaultSeo } from 'next-seo';

const extendedTheme = extendTheme({
  styles: {
    global: {
      '#__next': { display: 'flex', flexDirection: 'column', minHeight: '100vh' },
    },
  },
  semanticTokens: {
    colors: {
      section: {
        default: 'blue.100',
        _dark: 'blue.800',
      },
      activeLink: {
        default: 'blue.600',
        _dark: 'blue.300',
      },
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={extendedTheme}>
      <DefaultSeo titleTemplate='%s | Kristian Djaković' defaultTitle='Kristian Djaković' />

      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
