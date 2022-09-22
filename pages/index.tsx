import { BaseLayout } from '@/components/shared/layouts/BaseLayout';
import {
  Box,
  chakra,
  Container,
  Flex,
  Heading,
  HStack,
  Link,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import Image from 'next/future/image';

const ChakraNextImage = chakra(Image, {
  shouldForwardProp(prop) {
    return ['width', 'height', 'src', 'alt'].includes(prop);
  },
});

export default function Home() {
  return (
    <BaseLayout>
      <Container maxW='container.lg' pt={8}>
        <Flex as='header' direction={{ base: 'column', sm: 'row' }} align='center' gap={4}>
          <ChakraNextImage
            alt='Kristian Djaković profile'
            src='/profile-photo.png'
            width={86}
            height={86}
            borderRadius='full'
            boxSize={{ base: 20, sm: 24 }}
            boxShadow=' 0 0 0 2px var(--chakra-colors-chakra-body-bg), 0 0 0 4px var(--chakra-colors-section), 0px 0px 25px 10px rgb(0 0 0 / 10%)'
          />

          <Box>
            <Heading as='h1' size='2xl' textAlign='start'>
              Kristian Djaković
            </Heading>

            <Text fontSize='xl' mt={{ base: 1, sm: 2 }} textAlign='start'>
              Javascript Engineer at{' '}
              <Text as='span' fontWeight='semibold'>
                Infinum
              </Text>
            </Text>
          </Box>
        </Flex>

        <Box
          as='section'
          mt={16}
          bgColor='section'
          p={4}
          borderRadius='2xl'
          borderTopLeftRadius='none'
        >
          <Heading as='h2' size='lg'>
            About me
          </Heading>

          <Heading as='h3' size='md' mt={4}>
            Contact me
          </Heading>

          <UnorderedList mt={2}>
            <ListItem>
              <Link href='https://twitter.com/kdjakovic240'>Twitter</Link>
            </ListItem>
            <ListItem>
              <Link href='www.linkedin.com/in/kristiandjakovic'>LinkedIn</Link>
            </ListItem>
            <ListItem>
              <Link href='mailto:kiki@duck.com'>Email</Link>
            </ListItem>
          </UnorderedList>
        </Box>

        <Box
          as='section'
          mt={8}
          bgColor='section'
          p={4}
          borderRadius='2xl'
          borderTopLeftRadius='none'
        >
          <Heading as='h2' size='lg'>
            Education
          </Heading>

          <Box as='article'>
            <Heading as='h3' size='md'>
              Faculcy of Electrical Engineering and Computing
            </Heading>
            <Text>Zagreb, Croatia</Text>
            <Text>Bachelor of Science in Computer Science</Text>
          </Box>
        </Box>
      </Container>
    </BaseLayout>
  );
}
