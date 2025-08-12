import React, { ReactNode } from "react";
import DownloadIcon from "@mui/icons-material/Download";
import { WavelengthButton } from "./WavelengthButton/WavelengthButton";
interface DownloadProps {
  fileLoc: "local" | "api";
  fileURL: string;
  fileName: string;
  button?: ReactNode | React.JSX.Element;
  id?: string;
}

export function WavelengthFileDownloader({ fileLoc, fileURL, fileName, button, id }: DownloadProps) {
  if (fileLoc === "local") {
    const onButtonClick = () => {
      const pdfUrl = fileURL;
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = fileName; // specify the filename
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
    return (
      <>
        {button === undefined && (
          <WavelengthButton variant="outlined" onClick={onButtonClick} id={id}>
            {fileName}
            <DownloadIcon sx={{ marginLeft: "8px" }} />
          </WavelengthButton>
        )}

        {
          <div id={id} onClick={onButtonClick}>
            {button}
          </div>
        }
      </>
    );
  }
}

export default WavelengthFileDownloader;
