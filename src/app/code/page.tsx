"use client"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import hljs from "highlight.js";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";



const useDoShare = () => {
  const [codeRaw, setCodeRaw] = useState("");
  const { toast } = useToast()
  const [language, setLanguage] = useState('auto');
  const languages = hljs.listLanguages();
  const doShare = async () => {
    if (!codeRaw.trim().length) {
      toast({ title: "请输入代码", variant: "destructive" })
      return;
    }
    const res = await fetch("/api/code", {
      method: "POST",
      body: JSON.stringify({
        code: codeRaw,
        language: language
      })
    });
    const { code, data } = await res.json();
    if (code == 200) {
      toast({ title: "发布成功" })
      window.location.href = `/code/${data.uuid}`
    }
  }

  return { codeRaw, setCodeRaw, language, setLanguage, languages, doShare }
}



export default function Home() {
  const { codeRaw, setCodeRaw, language, setLanguage, languages, doShare } = useDoShare();
  return (
    <div className={cn("mt-8 flex flex-col gap-4")}>
      <Card>
        <CardHeader>
          <CardTitle>源码</CardTitle>
          <CardDescription>使用 highlight.js 语法高亮</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div>
            <Select defaultValue={language} onValueChange={(value) => {
              setLanguage(value);
            }}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="(auto)" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem key={"auto"} value={"auto"}>{"auto"}</SelectItem>
                {
                  languages.map((item) => {
                    return <SelectItem key={item} value={item}>{item}</SelectItem>
                  })
                }
              </SelectContent>
            </Select>
          </div>
          <div className="grid w-full gap-2">
            <Textarea value={codeRaw} onChange={(e) => {
              setCodeRaw(e.target.value)
            }} className="min-h-96" placeholder="Type your code here." />
            <Button onClick={() => {
              doShare()
            }}>
              分享代码
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
