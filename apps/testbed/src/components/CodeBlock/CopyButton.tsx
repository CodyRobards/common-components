import "./SnippetStyles.css";

import { CopyToClipboard } from "react-copy-to-clipboard";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

type CopyButtonProps = {
  code: string;
};

function CopyButton({ code }: CopyButtonProps) {
  return (
    <button className="CopyButtonClass">
      <CopyToClipboard text={code}>
        <div>
          <ContentCopyIcon sx={{ color: "#8fd8ff" }} fontSize="large" />
        </div>
      </CopyToClipboard>
    </button>
  );
}

export default CopyButton;
