// async function request<TResponse>(
//   url: string,
//   config: RequestInit
// ): Promise<TResponse> {
//   const response = await fetch(url, config);
//   return await response.json();
// }

import { User } from "payload-types";

// const api = {
//   get: <TResponse>(url: string) => request<TResponse>(url, {}),
//   post: <TBody extends BodyInit, TResponse>(url: string, body: TBody) =>
//     request<TResponse>(url, { method: "POST", body }),
// };

// export { request, api };

async function fetchUsers(): Promise<User[]> {
  let users: User[] = new Array<User>();

  const userQuery = await fetch(
    `${process.env.PUBLIC_CMS_URL}/api/users?depth=2`
  ).then((res) => res.json());
  users = userQuery.docs;
  return users;
}

export { fetchUsers };
