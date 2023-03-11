import {
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function TeamGrid() {
  return (
    <Flex
      as="section"
      direction="column"
      align="center"
      bg={useColorModeValue("secondary.100", "secondary.800")}
      p={{ base: 3, md: 3, lg: 6 }}
    >
      <Stack direction="column" spacing={{ base: "6", md: "8" }} maxW={"4xl"}>
        <Heading
          lineHeight={1.1}
          fontWeight={400}
          fontSize={{ base: "xl", sm: "2xl", lg: "3xl" }}
        >
          Meet the team
        </Heading>
        <Text color={"gray.500"}>
          NEU Blockchain Club boasts a team of researchers, developers, &
          blockchain enthusiasts from a wide range of backgrounds - from
          Business & Psychology majors to CS grads. This diversity helps us form
          disruptive ideas from varied perspectives to realize the promise of
          blockchain and web3.
        </Text>
      </Stack>
    </Flex>
  );
}
