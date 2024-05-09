import { CopyIcon } from "@radix-ui/react-icons";

import { Button } from "@components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@components/ui/dialog";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import { useEffect, useRef, useState } from "react";
import Clipboard from "clipboard";

export function ShareLink({
  onClose = () => {},
  open = false,
  url = "https://ui.shadcn.com/docs/installation",
}: {
  url: string;
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    console.log("open", open);
  }, [open]);
  const [dialogVisible, setOpen] = useState(open);
  const copyBtnRef = useRef<HTMLButtonElement>(null);
  
  useEffect(() => { 
    console.log(copyBtnRef);
    let clipboard: any = null;
    if (copyBtnRef?.current) {
      console.log(copyBtnRef.current);
      clipboard = new Clipboard(copyBtnRef.current, {
        text: () => url,
      });
      clipboard.on("success", function (e: any) {
        console.log(e);
        
      });
    }
    console.log("组件加载成功");
    return () => clipboard?.destroy && clipboard.destroy();
  }, [copyBtnRef, url]);

  return (
    <Dialog open={open}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input id="link" defaultValue={url} readOnly />
          </div>
          <Button ref={copyBtnRef} type="submit" size="sm" className="px-3">
            <span className="sr-only">Copy</span>
            <CopyIcon className="h-4 w-4" />
          </Button>
        </div>
        <DialogFooter className="sm:justify-start">
          <Button
            onClick={() => {
              onClose();
            }}
            type="button"
            variant="secondary">
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
