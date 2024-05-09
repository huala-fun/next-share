"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@components/ui/select";
import { Textarea } from "@components/ui/textarea";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@components/ui/card";
import hljs from "highlight.js";
import { Button } from "@components/ui/button";
import { cn } from "@lib/utils";
import { ShareLink } from "@components/share-link";
import toast from "react-hot-toast";

const useDoShare = (publishCallBack: (url: string) => void) => {
  const [codeRaw, setCodeRaw] = useState("");
  const [language, setLanguage] = useState("auto");
  const languages = hljs.listLanguages();
  const [shareUrl, setShareUrl] = useState("");

  const doShare = async () => {
    if (!codeRaw.trim().length) {
      toast.error("请输入代码");
      return;
    }
    const res = await fetch("/api/code", {
      method: "POST",
      body: JSON.stringify({
        code: codeRaw,
        language: language,
      }),
    });
    const { code, data } = await res.json();
    if (code == 200) {
      toast.success("发布成功");
      publishCallBack(`/code/${data.uuid}`);
    }
  };
  return {
    codeRaw,
    setCodeRaw,
    language,
    setLanguage,
    languages,
    doShare,
    shareUrl,
  };
};

export default function Home() {
  const [shareDialog, setShareDialog] = useState({
    open: false,
    url: "",
  });
  const { codeRaw, setCodeRaw, language, setLanguage, languages, doShare } =
    useDoShare((url) => {
      console.log(url);
      setShareDialog(() => {
        return {
          open: true,
          url: url,
        };
      });
    });

  useEffect(() => {
    console.log(shareDialog);
  }, [shareDialog]);

  return (
    <div className={cn("mt-8 flex flex-col gap-4")}>
      <ShareLink
        open={shareDialog.open}
        url={shareDialog.url}
        onClose={() => {
          setShareDialog((res) => {
            return { ...res, open: false };
          });
        }}
      />
      <Card>
        <CardHeader>
          <CardTitle>Source code</CardTitle>
          <CardDescription>
            Use highlight.js for syntax highlighting
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div>
            <Select
              defaultValue={language}
              onValueChange={(value: string) => {
                setLanguage(value);
              }}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="(auto)" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem key={"auto"} value={"auto"}>
                  {"auto"}
                </SelectItem>
                {languages.map((item) => {
                  return (
                    <SelectItem key={item} value={item}>
                      {item}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>
          <div className="grid w-full gap-2">
            <Textarea
              value={codeRaw}
              onChange={(e) => {
                setCodeRaw(e.target.value);
              }}
              className="min-h-96"
              placeholder="Type your code here."
            />
            <Button
              onClick={() => {
                doShare();
              }}>
              Share your code
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
