import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React, { ReactNode, useEffect, useRef } from "react";

interface Testprops {
  isPopUpOpen: boolean;
  type: "success" | "error" | "disabled";
  icon?: ReactNode;
  width?: string | number;
  message?: string | ReactNode;
  img: React.JSX.Element | ReactNode;

  toggleOpen: (value: React.SetStateAction<boolean>) => void;
  customVertyAlign?: string;
}
export const useOutsideClick = (callback: () => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("mouseup", handleClickOutside);
    document.addEventListener("touchend", handleClickOutside);

    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
      document.removeEventListener("touchend", handleClickOutside);
    };
  }, [callback]);

  return ref;
};
export function WavelengthTestSnackbar({ isPopUpOpen, toggleOpen, type, message, customVertyAlign, width, img }: Testprops) {
  const ref = useOutsideClick(() => {
    toggleOpen(false);
  });

  let bgColor = "";
  if (type === "success") {
    bgColor = "#25ab21";
  } else if (type === "error") {
    bgColor = "#FF4646";
  } else if (type === "disabled") {
    bgColor = "#737373";
  }

  return (
    <>
      {isPopUpOpen && (
        <Box
          sx={{ position: "fixed", right: "auto", top: "24px", left: "50%", transform: "translateX(-50%)" }}
          ref={ref}
          style={{
            height: "50px",
            width: width,
            backgroundColor: bgColor,
            borderRadius: "1px",
            display: "flex",

            justifyContent: "space-between",
            alignItems: "center",
            paddingRight: "20px",
            paddingLeft: "20px",
            zIndex: 2800,
            marginTop: customVertyAlign ? `${customVertyAlign}` : "",
          }}
        >
          <div style={{ backgroundColor: "red" }}></div>
          <div style={{ color: "white", fontSize: "1rem" }}>{message}</div>
          <Button
            variant="text"
            onClick={() => {
              toggleOpen(false);
            }}
          >
            {img}
          </Button>
        </Box>
      )}
    </>
  );
}
