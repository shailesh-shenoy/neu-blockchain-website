import Hero from "@/components/home/Hero";
import ResearchGrid from "@/components/home/ResearchGrid";
import TeamGrid from "@/components/home/TeamGrid";
import { User } from "@/payload-types";
import { GetStaticProps } from "next";

export default function Home({ users }: HomeProps) {
  return (
    <>
      <Hero />
      <TeamGrid users={users} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const users: User[] = new Array<User>();
  users.push({
    id: "1",
    createdAt: "x",
    updatedAt: "y",
    roles: ["admin", "developer"],
    name: "Shailesh",
    title: "Developer",
    description:
      "Shailesh is a Full Stack developer looking to break into web3 development. He is part of our tech team and the developer of this website!",
  });
  users.push({
    id: "2",
    createdAt: "y",
    updatedAt: "z",
    roles: ["admin"],
    name: "ABC",
    title: "Co-President",
  });
  users.push({
    id: "3",
    createdAt: "z",
    updatedAt: "x",
    roles: ["developer"],
    name: "XYZ",
    title: "Marketing Head",
  });

  users.push({
    id: "4",
    createdAt: "z",
    updatedAt: "x",
    roles: ["developer"],
    name: "YOU",
    title: "What do you want to be?",
  });

  return {
    props: {
      users,
    },
  };
};

export type HomeProps = {
  users: User[];
  statusCode: number;
};
