"use client"
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useCopy } from "@/hooks/use-copy";
import { CopyIcon } from '@radix-ui/react-icons'
import { cn } from "@/lib/utils";

export default function CodeView({ code, language = "javascript" }: { code: string, language: string }) {
    const codeClass = `language-${language}`;
    const { copyState } = useCopy(".code-view-copy", `.${codeClass}`);
    const codeHightHtml = language == "auto" ? hljs.highlightAuto(code) : hljs.highlightAuto(code, [language]);
    return (
        <Card>
            <CardHeader>
                <CardTitle>预览</CardTitle>
                <CardDescription>使用 highlight.js 语法高亮</CardDescription>
            </CardHeader>
            <CardContent>
                <pre className="relative pt-6 overflow-x-auto">
                    <div className="hidden code-view-copy cursor-pointer absolute top-0 right-6 hover:block">{copyState ? "已复制" : <CopyIcon />}</div>
                    <code className={cn(codeClass, " whitespace-break-spaces")} id={codeClass} dangerouslySetInnerHTML={{ __html: codeHightHtml.value }} />
                </pre>
            </CardContent>
        </Card>
    )

}
