import { useExternal } from "ahooks";
import { useState } from "react";
import { type Options } from "ahooks/lib/useExternal";

const useSwitchExternal = (url?: string, options?: Options) => {
  const [path, setPath] = useState(url);
  const status = useExternal(path, options);
  return { status, path, setPath };
};

export default useSwitchExternal;
