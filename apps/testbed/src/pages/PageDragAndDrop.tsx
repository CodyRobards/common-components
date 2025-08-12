import { useState } from "react";
import { WavelengthDragAndDrop } from "@wavelengthusaf/components";
import { IconButton, Stack } from "@mui/material";
import Close from "@mui/icons-material/Close";
import CodeBlock from "../components/CodeBlock/CodeBlock";

const imp = 'import { WavelengthDragAndDrop } from "@wavelengthusaf/components";';
function PageDragAndDrop() {
  const [files, setFiles] = useState<File[]>([]);

  const handleRemoveFile = (index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };
  const handleFilesSelected = (newFiles: File[]) => {
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  return (
    <>
      <span className="page-name">Drag and Drop</span>
      <div className="contentBlock">
        <p>The Drag and Drop components enables users to drag files into a dropzone to be uploaded.</p>
        <br />

        <h2>Import Statements</h2>
        <CodeBlock code={imp} />
      </div>
      <h2>File Types</h2>
      <div>The Drag and Drop Component takes in two props that can restrict or specify wanted file types (Examples Below)</div>
      <div>
        <span style={{ fontWeight: "bold" }}>- allowedFileExtensions</span> prop is a string that contains the filetypes can select from the file system
      </div>
      <div style={{ marginBottom: "24px" }}>
        <span style={{ fontWeight: "bold" }}>- allowedFileMIME</span> prop specifies the Multipurpose Internet Mail Extensions(MIME) which contains the format of type/subtype(extension){" "}
      </div>
      <CodeBlock
        code="const allowedFileExtensions = '.png, .jpg, .tsx, .jpeg';
const allowedFileMIME = ['image/png', 'image/jpeg'];"
      />

      <Stack
        sx={{ backgroundColor: "#081b27", border: "1px solid #214355", borderRadius: "5px" }}
        overflow={"scroll"}
        padding={8}
        direction={"column"}
        spacing={1}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <WavelengthDragAndDrop onFilesSelected={handleFilesSelected} allowedFileExtensions=".png, .jpg, .pdf" allowedFileMIME={["image/png", "image/jpg", "application/pdf"]}></WavelengthDragAndDrop>

        <h3 style={{ color: "white", marginTop: "16px" }}>Files</h3>

        <div style={{ width: 540 }}>
          {/* Header Row */}
          <div
            style={{
              width: "100%",
              height: "35px",

              display: "flex",
              alignItems: "center",
              padding: "0px 8px",
              // Light background for header
              fontWeight: "bold",
              boxSizing: "border-box",
            }}
          >
            <div style={{ flex: 2, textAlign: "left", whiteSpace: "nowrap", minWidth: 0 }}>Filename</div>
            <div style={{ flex: 1, textAlign: "left", whiteSpace: "nowrap", minWidth: 0 }}>Size</div>
            <div style={{ flex: 1, textAlign: "left", whiteSpace: "nowrap", minWidth: 0 }}>File Type</div>
            <div style={{ flex: 1, textAlign: "left", whiteSpace: "nowrap", minWidth: 0 }}>Remove</div>
          </div>

          {/* File List */}
          {files.length > 0 &&
            files.map((file, index) => (
              <div
                key={index}
                style={{
                  width: "100%",
                  height: "35px",
                  border: "1px solid rgba(14, 178, 178, 1)",
                  display: "flex",
                  alignItems: "center",
                  padding: "0px 8px",
                  boxSizing: "border-box",
                  marginTop: "5px",
                  borderRadius: "5px",
                }}
              >
                <div style={{ flex: 2, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", minWidth: 0 }}>{file.name}</div>
                <div style={{ flex: 1, textAlign: "left", whiteSpace: "nowrap", minWidth: 0 }}>{file.size}</div>
                <div style={{ flex: 1, textAlign: "left", whiteSpace: "nowrap", minWidth: 0 }}>{file.type}</div>
                <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
                  <IconButton sx={{ padding: 0 }} onClick={() => handleRemoveFile(index)}>
                    <Close fontSize="small" sx={{ color: "white" }} />
                  </IconButton>
                </div>
              </div>
            ))}
        </div>
      </Stack>
      <CodeBlock
        code='const [files, setFiles] = useState<File[]>([]);
/*Functions*/
const handleRemoveFile = (index: number) => {
  setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
};
const handleFilesSelected = (newFiles: File[]) => {
  setFiles((prevFiles) => [...prevFiles, ...newFiles]);
};
/*Drag and Drop component*/
<WavelengthDragAndDrop onFilesSelected={handleFilesSelected} allowedFileExtensions=".png, .jpg, .pdf" allowedFileMIME={["image/png", "image/jpg", "application/pdf"] ></WavelengthDragAndDrop>
'
      />
    </>
  );
}

export default PageDragAndDrop;
