import { ReactNode } from "react";

import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Image,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";

import NextLink from "next/link";

export default function Footer() {
  return (
    <Box
      as="footer"
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      mt="auto"
    >
      <Flex as={Stack} py={10} px={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Flex justify={"center"}>
              <Link as={NextLink} href="/">
                <Image
                  src="/logo.png"
                  alt="NEU Blockchain"
                  w={"128px"}
                  h="auto"
                />
              </Link>
            </Flex>
            <Text fontSize={"sm"} align={"center"}>
              © 2023 NEU Blockchain Club. All rights reserved.
            </Text>
          </Stack>

          <Stack>
            <ListHeader>About</ListHeader>
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>About us</Link>
            <Link href={"#"}>Meet the team</Link>
            <Link href={"#"}>Partners</Link>
          </Stack>
          <Stack>
            <ListHeader>Our Work</ListHeader>
            <Link href={"#"}>Research</Link>
            <Link href={"#"}>Projects</Link>
            <Link href={"#"}>Events</Link>
            <Link href={"#"}>Podcasts</Link>
          </Stack>
          <Stack>
            <ListHeader>Links</ListHeader>
            <Link href={"#"}>Instagram</Link>
            <Link href={"#"}>Contact</Link>
            <Link href={"#"}>Careers</Link>
          </Stack>
        </SimpleGrid>
      </Flex>
    </Box>
  );
}

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};
