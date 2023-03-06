import { Container, Heading, Stack, Text } from "@chakra-ui/react";

export default function ResearchGrid() {
  return (
    <Container as="section" maxW={"7xl"}>
      <Stack direction="column" spacing={{ base: "6", md: "8" }} maxW={"4xl"}>
        <Heading
          lineHeight={1.1}
          fontWeight={400}
          fontSize={{ base: "xl", sm: "2xl", lg: "3xl" }}
        >
          Research
        </Heading>
        <Text color={"gray.500"}>
          At NEU Blockchain, we have a whole division dedicated to producing
          world class research related to DeFi, NFTs, L1, L2, decentralized
          ledger techonology, security, and much more. We have over 10 teams
          churning out research in all of these fields in the form of articles
          and research papers
        </Text>
      </Stack>
    </Container>
  );
}
