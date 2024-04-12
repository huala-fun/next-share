import { useEffect, useState } from "react";
import Clipboard from "clipboard";

export const useCopy = (
  selector: string | Element | NodeListOf<Element>,
  target: string | Element | NodeListOf<Element>
) => {
  const [copyState, setCopeyState] = useState<boolean>(false);
  useEffect(() => {
    const copyCode = new Clipboard(selector, {
      target() {
        if (target instanceof Element) {
          return target as Element;
        }
        if (target instanceof NodeList) {
          return target[0] as Element;
        }
        return document.querySelector(target) as Element;
      },
    });
    let timeout: any = null;
    copyCode.on("success", (e) => {
      e.clearSelection();
      setCopeyState(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setCopeyState(false), 1000);
    });
    return () => {
      copyCode.destroy();
    };
  }, [selector, target]);
  return { copyState };
};