import { ProfileProps } from "./types";
import { Media } from "../../../payload-types";
import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";

export default function ProfileCard({ user }: ProfileProps) {
  const defaultPhoto = "/default-profile.jpg";

  const userPhotoObj: any = user.photo?.valueOf();
  const userPhoto: string = userPhotoObj?.sizes?.feature?.url ?? defaultPhoto;
  return (
    <Stack
      py={6}
      h={"full"}
      align={"center"}
      bg={useColorModeValue("secondary.50", "tertiary.900")}
      boxShadow={"2xl"}
    >
      <Image
        src={userPhoto}
        rounded="full"
        alt={user.name + "'s photo"}
        w={{ base: "50%", md: "60%", lg: "70%" }}
      />
      <Heading fontSize={"2xl"} fontFamily={"body"}>
        {user.name}
      </Heading>
      <Text fontWeight={600} color={"gray.500"} mb={4}>
        {user.title}
      </Text>
      <Text color={useColorModeValue("gray.700", "gray.400")} px={3}>
        {user.description}
      </Text>

      <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
        {user.roles?.map((r) => {
          return (
            <Badge
              key={r}
              px={2}
              py={1}
              bg={"secondary.200"}
              color={"tertiary.900"}
              fontWeight={"600"}
            >
              {r}
            </Badge>
          );
        })}
      </Stack>

      <Stack mt={8} direction={"row"} spacing={4}>
        <Button
          flex={1}
          fontSize={"sm"}
          paddingX={8}
          rounded={"full"}
          bg={useColorModeValue("tertiary.100", "tertiary.800")}
          _focus={{
            bg: useColorModeValue("primary.200", "primary.700"),
          }}
          _hover={{
            bg: useColorModeValue("primary.200", "primary.700"),
          }}
        >
          Connect
        </Button>
        <Button
          flex={1}
          paddingX={8}
          fontSize={"sm"}
          rounded={"full"}
          bg={useColorModeValue("tertiary.400", "tertiary.500")}
          color={"white"}
          boxShadow={"2xl"}
          _hover={{
            bg: useColorModeValue("primary.400", "primary.500"),
          }}
          _focus={{
            bg: useColorModeValue("primary.400", "primary.500"),
          }}
        >
          Work
        </Button>
      </Stack>
    </Stack>
  );
}
