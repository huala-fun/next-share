"use client";
import hljs from "highlight.js";
import { useCopy } from "@/hooks/useCopy";
import { CopyIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import useSwitchExternal from "@/hooks/useExternal";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import "highlight.js/styles/mono-blue.css";

const useSwitchTheme = () => {
  const { status, setPath } = useSwitchExternal();
  const { theme } = useTheme();
  useEffect(() => {
    setPath(
      `/assets/css/github-markdown-${theme == "dark" ? "dark" : "light"}.css`
    );
  }, [setPath, theme]);
  return status;
};

const useSwitchHighlight = () => {
  const { status, setPath } = useSwitchExternal();
  const { theme } = useTheme();
  useEffect(() => {
    const highlight = theme == "dark" ? "monokai.min.css" : "idea.min.css";
    setPath(`/assets/css/${highlight}`);
  }, [setPath, theme]);
  return status;
};

export const CodeBlock = ({
  code,
  language = "javascript",
  className,
  style,
}: {
  code: string;
  language: string;
  className?: string;
  style?: React.CSSProperties;
}) => {
  const codeClass = `language-${language}`;
  const { copyState } = useCopy(".code-view-copy", `.${codeClass}`);
  const codeHightHtml =
    language == "auto"
      ? hljs.highlightAuto(code)
      : hljs.highlightAuto(code, [language]);

  const status = useSwitchTheme();

  const highlightStatus = useSwitchHighlight();
  if (status === "unset" || highlightStatus == "unset") {
    return null;
  }

  return (
    <div className={cn("markdown-body mx-auto", className)} style={style}>
      <div>Use highlight.js for syntax highlighting</div>
      <div className="   mt-4">
        <pre className="relative pt-6 overflow-x-auto">
          <div className="hidden code-view-copy cursor-pointer absolute top-0 right-6 hover:block">
            {copyState ? "已复制" : <CopyIcon />}
          </div>
          <code
            className={cn(codeClass, " whitespace-break-spaces")}
            id={codeClass}
            dangerouslySetInnerHTML={{ __html: codeHightHtml.value }}
          />
        </pre>
      </div>
    </div>
  );
};
