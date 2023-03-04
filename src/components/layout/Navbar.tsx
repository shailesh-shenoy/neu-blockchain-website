import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  List,
  ListItem,
  Image,
  useColorMode,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  MoonIcon,
  SunIcon,
} from "@chakra-ui/icons";

import NextLink from "next/link";

import { NavItem } from "./types";
import { px } from "framer-motion";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box as="nav">
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
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
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Link as={NextLink} href="/">
            <Image
              src="/logo.png"
              alt="NEU Blockchain"
              h="48px"
              w="auto"
              // objectFit="cover"
            />
          </Link>

          <Flex display={{ base: "none", md: "flex" }} ml={20}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Flex flex={{ base: 1, md: 0 }} justify={"flex-end"}>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

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
      bg={useColorModeValue("white", "gray.800")}
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
