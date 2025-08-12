// https://medium.com/@lobocroidy/creating-a-code-block-with-syntax-highlighting-and-copy-button-using-react-and-typescript-c69be2061d73

import CopyButton from "./CopyButton";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

type CodeBlockProps = {
  title?: string;
  code: string;
  language?: string;
  width?: string;
};

export default function CodeBlock({ code, language = "tsx", width }: CodeBlockProps) {
  return (
    <div className="contentBlock" style={{ width: width }}>
      <div className="CodeBlockClass">
        <CopyButton code={code} />
        <SyntaxHighlighter
          language={language}
          style={vscDarkPlus}
          wrapLines={true}
          wrapLongLines={true}
          customStyle={{
            border: "1px solid #214355",
            borderRadius: "5px",
            fontSize: "1.17em",
            marginTop: "0px",
            backgroundColor: "#081b27",
            zIndex: -100,
            maxWidth: width,
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
