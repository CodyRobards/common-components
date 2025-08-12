import { ReactNode } from "react";
import "./ComponentContainer.css";

interface ComponentContainerProps {
  backgroundColor?: string;
  children: ReactNode;
  width?: string | number;
}

export function ComponentContainer({ backgroundColor = "#081b27", children, width }: ComponentContainerProps) {
  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        borderRadius: "5px",
        border: "1px solid #214355",
        display: "flex",
        justifyContent: "center",
        paddingLeft: "10px",
        paddingRight: "10px",
        paddingTop: "20px",
        paddingBottom: "20px",
        minWidth: "fit-content",
        width: width,
      }}
    >
      {children}
    </div>
  );
}

export default ComponentContainer;
