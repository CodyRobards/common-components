import React, { useState } from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { IconButton } from "@mui/material";
interface CommentProps {
  width?: string;
  height?: string;
  author: string;
  date: string;
  comments: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  textColor?: string;
  backgroundColor?: string;
  border?: string;
  iconSelectedColor?: string;
  dataTestId?: string;
}
export function WavelengthCommentDisplay(props: CommentProps) {
  const [selected, setSelected] = useState(false);
  return (
    <div
      data-testid={props.dataTestId}
      style={{
        display: "flex",
        flexDirection: "column",
        width: props.width || "332px",
        minHeight: "fit",
        height: props.height || "fit-content",
        backgroundColor: props.backgroundColor || "rgba(250, 242, 236, 1)",
        border: props.border || "1px solid rgba(0, 0, 0, 0.05)",
        borderRadius: "6px",
        padding: "12px",
        color: props.textColor || "black",
      }}
    >
      <div style={{ fontSize: "14px", fontWeight: 600, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 0 }}>
        {props.author}
        {!selected && (
          <IconButton
            onClick={(e) => {
              setSelected(!selected);
              props.onClick?.(e); // ✅ Call the handler if it exists
            }}
            style={{ padding: "0px" }}
          >
            <CheckCircleOutlineIcon fontSize="small" />
          </IconButton>
        )}
        {selected && (
          <IconButton
            onClick={(e) => {
              setSelected(!selected);
              props.onClick?.(e);
            }}
            style={{ padding: "0px" }}
          >
            <CheckCircleIcon fontSize="small" sx={{ color: props.iconSelectedColor || "rgba(209, 106, 47, 1)" }} />
          </IconButton>
        )}
      </div>
      <label style={{ fontSize: "12px", fontWeight: 400, opacity: 0.6 }}>{props.date}</label>
      <div style={{ fontSize: "14px", fontWeight: 400, marginTop: "8px" }}>{props.comments}</div>
    </div>
  );
}

export default WavelengthCommentDisplay;
