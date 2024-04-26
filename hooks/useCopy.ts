import { MutableRefObject, useEffect, useRef, useState } from "react";
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

export const useCopyText = (
  copyRef: MutableRefObject<Element | null>,
  text: string
) => {
  useEffect(() => { 
    console.log(copyRef);
    let clipboard: any = null;
    if (copyRef?.current) {
      console.log(copyRef.current);
      clipboard = new Clipboard(copyRef.current, {
        text: () => text,
      });
      clipboard.on("success", function (e: any) {
        console.log(e);
        
      });
    }
    console.log("组件加载成功");
    return () => clipboard?.destroy && clipboard.destroy();
  }, [copyRef, text]);
};
