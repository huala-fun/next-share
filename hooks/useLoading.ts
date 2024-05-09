import { useState } from "react";

export const useLoading = (cb: () => Promise<any>) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>([]);
  const run = async () => {
    setLoading(true);
    try {
      const { data = [] } = await cb();
      setData(data);
    } finally {
      setLoading(false);
    }
  };
  return { loading, run, data };
};
