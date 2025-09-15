import { useEffect, useState } from "react";
import Close from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";

interface DragAndDropProps {
  width?: string;
  height?: string;
  border?: string;
  onFilesSelected: (files: File[]) => void;
  textColor?: string;
  fontSize?: string;
  allowedFileMIME?: string[];
  allowedFileExtensions?: string;
  backgroundColor?: string;
  dataTestId?: string;
}
export function WavelengthDragAndDrop({
  width = "550px",
  height = "230px",
  onFilesSelected,
  border,
  textColor,
  fontSize = "12px",
  allowedFileMIME,
  allowedFileExtensions,
  backgroundColor = "transparent",
  dataTestId,
}: DragAndDropProps) {
  // const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    if (selectedFiles && selectedFiles.length > 0) {
      const newFiles = Array.from(selectedFiles);
      onFilesSelected(newFiles);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const droppedFiles = event.dataTransfer.files;

    if (droppedFiles.length > 0) {
      const newFiles = Array.from(droppedFiles);

      // If allowedFileMIME is provided, use it; otherwise, allow all files.
      const allowedTypes = allowedFileMIME ? allowedFileMIME : "*/*"; // Using wildcard for all file types

      // Check for valid files based on the allowed MIME types.
      const validFiles = newFiles.filter((file) => allowedTypes === "*/*" || allowedTypes.includes(file.type));

      if (validFiles.length > 0) {
        // If there are valid files, append them to the state
        onFilesSelected(validFiles);
      } else {
        // Optionally, show an error message or notification if the files are not valid
        alert(`Invalid file type`);
      }
    }
  };

  return (
    <div
      data-testid={dataTestId}
      style={{
        backgroundColor: backgroundColor,
        border: border ? border : "1px dashed rgba(14, 178, 178, 1)",
        borderRadius: "8px",
        paddingTop: "10px",
        boxSizing: "border-box",
        width: width,
        height: height,
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "scroll",
      }}
      onDrop={handleDrop}
      onDragOver={(event) => event.preventDefault()}
    >
      <div style={{ fontSize: fontSize, color: textColor }}>
        <input type="file" hidden multiple id="browse" onChange={handleFileChange} accept={allowedFileExtensions} />
        Drag File here or{" "}
        <label htmlFor="browse" style={{ textDecoration: "underline", cursor: "pointer" }}>
          select from files
        </label>
      </div>
    </div>
  );
}

WavelengthDragAndDrop.displayName = "WavelengthDragAndDrop";

export default WavelengthDragAndDrop;
