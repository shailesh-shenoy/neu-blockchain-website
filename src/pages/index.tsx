import Hero from "@/components/home/Hero";
import ResearchGrid from "@/components/home/ResearchGrid";
import TeamGrid from "@/components/home/TeamGrid";
import { User } from "@/payload-types";
import { GetStaticProps } from "next";

export default function Home({ users }: Props) {
  return (
    <>
      <Hero />
      <TeamGrid />
      {users.map((u) => {
        return <div key={u.name}>{u.name}</div>;
      })}
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
  });
  users.push({
    id: "2",
    createdAt: "y",
    updatedAt: "z",
    roles: ["admin"],
    name: "ABC",
  });
  users.push({
    id: "3",
    createdAt: "z",
    updatedAt: "x",
    roles: ["developer"],
    name: "XYZ",
  });

  return {
    props: {
      users,
    },
  };
};

export type Props = {
  users: User[];
  statusCode: number;
};
