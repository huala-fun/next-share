import { Redis } from "@upstash/redis";

export const redis = Redis.fromEnv();

export const genCodeShareKey = (uuid: string) => {
  return `code_${uuid}`;
};
