import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Hero() {
  return (
    <Flex
      as="section"
      direction="column"
      align="center"
      bg={useColorModeValue("secondary.100", "secondary.800")}
      p={{ base: 6, md: 6, lg: 12 }}
    >
      <Stack
        align={"center"}
        maxW={"7xl"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            <Text
              as={"span"}
              position={"relative"}
              zIndex={10}
              color={useColorModeValue("secondary.900", "secondary.50")}
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: useColorModeValue("primary.500", "primary.400"),
                zIndex: -1,
              }}
            >
              NEU Blockchain Club
            </Text>
            <br />
            <Text
              as={"span"}
              color={useColorModeValue("primary.500", "primary.400")}
            >
              Learn. Research. Develop.
            </Text>
          </Heading>
          <Text color={useColorModeValue("secondary.600", "secondary.200")}>
            NEU Blockchain Club is a student-driven club with the aim to advance
            blockchain education, development, and research, by empowering
            students from various backgrounds to collaborate and bring
            disruptive ideas to fruition.
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          >
            <Button
              rounded={"full"}
              size={"lg"}
              fontWeight={"normal"}
              px={6}
              bg={useColorModeValue("primary.500", "primary.500")}
              color={useColorModeValue("secondary.50", "secondary.50")}
              _hover={{ bg: "primary.400", color: "secondary.50" }}
            >
              Join Us
            </Button>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Box
            position={"relative"}
            height={"300px"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"full"}
            overflow={"hidden"}
          >
            <Image
              alt={"Hero Image"}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              src={
                "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
              }
            />
          </Box>
        </Flex>
      </Stack>
    </Flex>
  );
}
