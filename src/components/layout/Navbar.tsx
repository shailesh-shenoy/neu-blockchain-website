import {
  Box,
  Flex,
  IconButton,
  Button,
  Stack,
  Collapse,
  Link,
  useColorModeValue,
  useDisclosure,
  List,
  ListItem,
  Image,
  useColorMode,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

import NextLink from "next/link";

import { NavItem } from "./types";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box as="nav">
      <Flex
        bg={useColorModeValue("secondary.100", "secondary.800")}
        color={useColorModeValue("primary.900", "secondary.50")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"none"}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            colorScheme={"primary"}
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Link as={NextLink} href="/">
            <Image src="/logo.png" alt="NEU Blockchain" h="48px" w="auto" />
          </Link>

          <Flex display={{ base: "none", md: "flex" }} ml={20}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Flex flex={{ base: 1, md: 0 }} justify={"flex-end"}>
          <IconButton
            onClick={toggleColorMode}
            aria-label={"Toggle Theme"}
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            colorScheme={"secondary"}
            variant={"ghost"}
          />
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  return (
    <Stack as={List} direction={"row"} spacing={12} align="center">
      {NAV_ITEMS.map((navItem) => (
        <ListItem key={navItem.label}>
          <Link as={NextLink} href={navItem.link}>
            {navItem.label}
          </Link>
        </ListItem>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack
      as={List}
      bg={useColorModeValue("secondary.100", "secondary.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <ListItem key={navItem.label}>
          <Link as={NextLink} href={navItem.link}>
            {navItem.label}
          </Link>
        </ListItem>
      ))}
    </Stack>
  );
};

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Research",
    link: "/research",
  },
  {
    label: "Events",
    link: "/events",
  },
  {
    label: "Projects",
    link: "/projects",
  },
  {
    label: "About",
    link: "/about",
  },
];
