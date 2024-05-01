import { Redis } from "@upstash/redis";

export const redis = Redis.fromEnv();

export const genCodeShareKey = (uuid: string) => {
  return `code_${uuid}`;
};

export const countKeys = async (pattern: string) => {
  let [cursor, keys] = await redis.scan(0, {
    match: pattern,
    count: 100,
  });
  let count = keys.length;
  while (cursor) {
    [cursor, keys] = await redis.scan(cursor, {
      match: pattern,
      count: 100,
    });
    count += keys.length;
  }
  return count;
};
