import { Height } from "@mui/icons-material";
import { fontWeight, height, padding } from "@mui/system";
import React from "react";

import styled from "styled-components";

export interface StyledButtonPropsTwo {
  type:
    | "channel_one_transparent"
    | "channel_one_launch"
    | "channel_one_request"
    | "channel_one_pending"
    | "channel_one_disabled"
    | "ewdms_tertiary"
    | "ewdms_primary"
    | "ewdms_secondary"
    | "brewery"
    | "default";
  styles?: React.CSSProperties; // Allow overriding styles (e.g., background color)
  hoverstyles?: React.CSSProperties;
  activestyles?: React.CSSProperties;
  disabledstyles?: React.CSSProperties;
  icon?: React.ReactNode;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const ButtonPresets = {
  default: {
    width: "130px",
    height: "45px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "8px",
    border: "none",
    fontSize: "",
    fontWeight: 600,
    color: "",
    margin: "",
    padding: "",
    backgroundColor: "",
    hover: {
      backgroundColor: "",
      color: "",
      cursor: "pointer",
      width: "",
      height: "",
      border: "",
      fontSize: "",
    },
    disabled: {
      cursor: "",
      opacity: "",
    },

    active: {
      backgroundColor: "",
      boxShadow: "",
      transition: "",
      border: "",
    },
  },
  ewdms_primary: {
    width: "130px",
    height: "45px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "8px",
    border: "none",
    fontSize: "16px",
    fontWeight: 600,
    color: "white",
    margin: "",
    padding: "12px 32px",
    backgroundColor: "rgba(26, 128, 131, 1)",
    hover: {
      backgroundColor: "rgba(38, 186, 190, 1)",
      color: "rgba(247, 247, 249, 1)",
      cursor: "pointer",
      width: "",
      height: "",
      border: "",
      fontSize: "",
    },
    disabled: {
      cursor: "not-allowed",
      opacity: "0.4",
    },

    active: {
      backgroundColor: "#67a8aa",
      boxShadow: "",
      transition: "background-color 0.2s ease-in",
      border: "",
    },
  },
  ewdms_secondary: {
    width: "130px",
    height: "45px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "8px",
    border: "1px solid rgba(26, 128, 131, 1)",
    fontSize: "16px",
    fontWeight: 600,
    margin: "",
    color: "rgba(26, 128, 131, 1)",
    padding: "12px 32px",
    backgroundColor: "transparent",
    hover: {
      backgroundColor: "rgba(26, 128, 131, 0.1)",
      color: "rgba(26, 128, 131, 1)",
      cursor: "pointer",
      width: "",
      height: "",
      border: "",
      fontSize: "",
    },
    disabled: {
      cursor: "not-allowed",
      opacity: "0.4",
    },
    active: {
      backgroundColor: "#bad7da",
      boxShadow: "",
      transition: "background-color 0.2s ease-in",
      border: "",
    },
  },

  ewdms_tertiary: {
    width: "130px",
    height: "45px",
    display: "flex",
    margin: "",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "8px",
    border: "none",
    fontSize: "16px",
    fontWeight: 600,
    color: "rgba(26, 128, 131, 1)",
    padding: "12px 32px",
    backgroundColor: "transparent",
    hover: {
      backgroundColor: "rgba(26, 128, 131, 0.1)",
      color: "rgba(26, 128, 131, 1)",
      cursor: "pointer",
      width: "",
      height: "",
      border: "",
      fontSize: "",
    },
    disabled: {
      cursor: "not-allowed",
      opacity: "0.4",
    },
    active: {
      backgroundColor: "#445C71",
      boxShadow: "",
      transition: "background-color 0.2s ease-in",
      border: "",
    },
  },

  channel_one_launch: {
    width: "62px",
    height: "24px",
    display: "flex",
    margin: "",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "20px",
    border: "none",
    fontSize: "10px",
    fontWeight: 700,
    color: "white",
    padding: "0px 0px",
    backgroundColor: "#24A818",
    hover: {
      height: "28px",
      border: "0.5px solid white",
      fontSize: "12px",
      width: "72px",
      backgroundColor: "",
      color: "",
      cursor: "pointer",
    },
    disabled: {
      cursor: "not-allowed",
      opacity: "0.4",
    },
    active: {
      backgroundColor: "#6FC36E",
      boxShadow: "",
      transition: "background-color 0.2s ease-in",
      border: "",
    },
  },
  channel_one_request: {
    width: "100px",
    height: "24px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: "",
    justifyContent: "center",
    borderRadius: "20px",
    border: "none",
    fontSize: "10px",
    fontWeight: 700,
    color: "white",
    padding: "0px 0px",
    backgroundColor: "#1D31E4",
    hover: {
      height: "28px",
      border: "0.5px solid white",
      fontSize: "12px",
      width: "110px",
      backgroundColor: "",
      color: "",

      cursor: "pointer",
    },
    disabled: {
      cursor: "not-allowed",
      opacity: "0.4",
    },
    active: {
      backgroundColor: "#5D78ED",
      boxShadow: "",
      transition: "background-color 0.2s ease-in",
      border: "",
    },
  },
  channel_one_pending: {
    width: "62px",
    height: "24px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "20px",
    border: "none",
    fontSize: "10px",
    fontWeight: 700,
    color: "white",
    padding: "0px 0px",
    margin: "",
    backgroundColor: "#F88805",
    hover: {
      height: "28px",
      border: "0.5px solid white",
      fontSize: "12px",
      width: "72px",
      backgroundColor: "",
      color: "",

      cursor: "pointer",
    },
    disabled: {
      cursor: "not-allowed",
      opacity: "0.4",
    },
    active: {
      backgroundColor: "#FAAD68",
      boxShadow: "",
      transition: "background-color 0.2s ease-in",
      border: "",
    },
  },
  channel_one_disabled: {
    width: "100px",
    height: "24px",
    display: "flex",
    margin: "",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "20px",
    border: "none",
    fontSize: "10px",
    fontWeight: 700,
    color: "white",
    padding: "0px 0px",
    backgroundColor: "#9E9E9E",
    hover: {
      height: "",
      border: "",
      fontSize: "",
      width: "",
      backgroundColor: "",
      color: "",

      cursor: "",
    },
    disabled: {
      cursor: "not-allowed",
      opacity: "0.4",
    },
    active: {
      backgroundColor: "",
      boxShadow: "",
      transition: "",
      border: "",
    },
  },
  channel_one_transparent: {
    width: "70px",
    height: "25px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: "",
    justifyContent: "center",
    borderRadius: "6px",
    border: "1px solid white",
    fontSize: "10px",
    fontWeight: 500,
    color: "white",
    padding: "0px !important",
    backgroundColor: "transparent",
    hover: {
      height: "",
      border: "",
      fontSize: "",
      width: "",
      backgroundColor: "",
      color: "",

      cursor: "pointer",
    },
    disabled: {
      cursor: "",
      opacity: "",
    },
    active: {
      backgroundColor: "rgba(255, 255, 255, 0.22)",
      boxShadow: "",
      transition: "background-color 0.2s ease-in",
      border: "",
    },
  },
  brewery: {
    width: "138px",
    height: "44px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "6px",
    border: "none",
    fontSize: "16px",
    margin: "",
    fontWeight: 500,
    color: "white",
    padding: "12px 16px",
    backgroundColor: "#D16A2F",
    hover: {
      height: "",
      border: "",
      fontSize: "",
      width: "",
      backgroundColor: "#D16A2F",
      color: "",

      cursor: "pointer",
    },
    disabled: {
      cursor: "not-allowed",
      opacity: "0.4",
    },
    active: {
      backgroundColor: "",
      boxShadow: "0 0 5px black",
      transition: "",
      border: "",
    },
  },
};

const Button = styled.button<StyledButtonPropsTwo>`
  ${({ type }) => {
    const preset = ButtonPresets[type];
    return `
      width: ${preset.width};
      height: ${preset.height};
      display: ${preset.display};
      flex-direction: ${preset.flexDirection};
      align-items: ${preset.alignItems};
      justify-content: ${preset.justifyContent};
      border-radius: ${preset.borderRadius};
      border: ${preset.border};
      font-size: ${preset.fontSize};
      font-weight: ${preset.fontWeight};
      color: ${preset.color};
      padding: ${preset.padding};
      background-color: ${preset.backgroundColor};
      margin: ${preset.margin};

      &:hover {
        background-color: ${preset.hover.backgroundColor};
        color: ${preset.hover.color};
        cursor: ${preset.hover.cursor};
        width:${preset.hover.width};
        height:${preset.hover.height};
        border:${preset.hover.border};
        font-size:${preset.hover.fontSize};
      }

      &:disabled {
        cursor: ${preset.disabled.cursor};
        opacity: ${preset.disabled.opacity};
      }
      &:active {
      background-color: ${preset.active.backgroundColor};
      box-shadow: ${preset.active.boxShadow};
      border: ${preset.active.border};
      transition: ${preset.active.transition};
      }
    
    `;
  }}

  ${({ styles }) => styles && { ...styles }}
  ${({ hoverstyles }) =>
    hoverstyles && {
      "&:hover": { ...hoverstyles },
    }}
     ${({ activestyles }) =>
    activestyles && {
      "&:active": { ...activestyles },
    }}
   ${({ disabledstyles }) =>
    disabledstyles && {
      "&:disabled": { ...disabledstyles },
    }}
`;
export function WavelengthStyledButton({ type = "default", styles, children, disabled = false, hoverstyles, icon, onClick, disabledstyles, activestyles }: StyledButtonPropsTwo) {
  return (
    <Button type={type} styles={styles} hoverstyles={hoverstyles} disabledstyles={disabledstyles} disabled={disabled} activestyles={activestyles} onClick={onClick}>
      {icon}
      {children}
    </Button>
  );
}

WavelengthStyledButton.displayName = "WavelengthStyledButton";

export default WavelengthStyledButton;
