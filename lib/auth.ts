import { auth } from "@auth";

export const token = async () => {
  const session = await auth();
  return session;
};
