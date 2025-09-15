import React from "react";

import Close from "@mui/icons-material/Close";

import { IconButton, SvgIcon } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

interface WavelengthAlertProps {
  id?: string;
  height?: string;
  width?: string;
  variant?: "caveman" | "basic" | "civilized";
  backgroundColor?: string;
  alertType?: string | React.ReactNode;
  alertDescription?: string | React.ReactNode;
  datatestid?: string;
  viewed?: boolean;
  timeStamp?: string | React.ReactNode;
  appName?: string | React.ReactNode;
  url?: string;

  onClose?: () => void;
}
export function WavelengthAlert({
  viewed,
  width = "320px",
  height,
  backgroundColor = "#FBFBFB",
  appName,
  alertType = "Access Requested",
  alertDescription = "Keenan Ray has requested to be added as a User to your App",
  datatestid,
  variant,
  timeStamp,
  url,

  id,
  onClose,
}: WavelengthAlertProps) {
  const viewedStyles = viewed
    ? {
        backgroundColor: "#DFDCDC",
        border: "1px solid #A0A2A3",
        iconColor: "#A0A2A3",
      }
    : {
        backgroundColor: backgroundColor,
        border: "1px solid rgba(2, 136, 209, 1)",
        iconColor: "rgba(2, 136, 209, 1)",
      };

  const baseContainerStyle: React.CSSProperties = {
    width: width,
    height: height || "fit-content",
    backgroundColor: viewedStyles.backgroundColor,
    fontFamily: "Roboto, sans-serif",
    border: viewedStyles.border,
    borderRadius: "4px",
    display: "flex",
    flexDirection: "row",
    boxSizing: "border-box",
    alignItems: "flex-start",
    padding: "12px 16px 10px 16px",
    color: "#1E4620",
    position: variant === "civilized" ? "relative" : undefined,
  };

  const iconStyle = {
    width: "24px",
    padding: "0px",
    color: viewedStyles.iconColor,
  };

  if (variant === "caveman") {
    return (
      <div role="alert" id={id} data-testid={datatestid} style={baseContainerStyle}>
        <NotificationsIcon sx={iconStyle} />

        <a href={url} style={{ display: "flex", flexDirection: "column", gap: "4px", width: "250px", marginLeft: "12px", textDecoration: "none", color: baseContainerStyle.color }}>
          <label style={{ fontSize: "1rem", lineHeight: "150%", letterSpacing: "0.15px", fontWeight: 550 }}>{timeStamp}</label>
          <div
            style={{
              fontSize: ".875rem",
              fontWeight: 400,
              lineHeight: "143%",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {alertType}
          </div>
        </a>

        {onClose && (
          <IconButton sx={{ padding: "0px", width: "20px" }} onClick={onClose}>
            <Close />
          </IconButton>
        )}
      </div>
    );
  } else if (variant === "basic") {
    return (
      <div role="alert" id={id} data-testid={datatestid} style={baseContainerStyle}>
        <NotificationsIcon sx={iconStyle} />
        <a href={url} style={{ display: "flex", flexDirection: "column", gap: "4px", width: "250px", marginLeft: "12px", textDecoration: "none", color: baseContainerStyle.color }}>
          <label style={{ fontSize: "14px", lineHeight: "150%", letterSpacing: "0.15px", fontWeight: 500 }}>{timeStamp}</label>
          <div style={{ fontSize: "16px", fontWeight: 550, lineHeight: "24px" }}>{alertType}</div>
          <div style={{ fontSize: "14px", lineHeight: "20px", fontWeight: 400 }}>{appName}</div>
        </a>
        {onClose && (
          <IconButton sx={{ padding: "0px", width: "20px" }} onClick={onClose}>
            <Close />
          </IconButton>
        )}
      </div>
    );
  } else {
    return (
      <div role="alert" id={id} data-testid={datatestid} style={baseContainerStyle}>
        <NotificationsIcon sx={iconStyle} />
        <a href={url} style={{ display: "flex", flexDirection: "column", gap: "7px", width: "250px", marginLeft: "12px", textDecoration: "none", color: baseContainerStyle.color }}>
          <label style={{ fontSize: "16px", lineHeight: "24px", letterSpacing: "0.15px", fontWeight: 550 }}>{alertType}</label>
          <div style={{ fontSize: "14px", fontWeight: 400, lineHeight: "20px", letterSpacing: "0.25px", width: "200px" }}>{appName}</div>
          <div style={{ fontSize: "14px", lineHeight: "20px", fontWeight: 400 }}>{alertDescription}</div>
        </a>
        <div
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            right: "15px",
            bottom: "12px",
          }}
          className="icon-btn-container"
        >
          <IconButton sx={{ padding: "3px" }} onClick={onClose}>
            <SvgIcon>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#4E4E4F">
                <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
              </svg>
            </SvgIcon>
          </IconButton>
          <div style={{ fontSize: "11px" }}>Dismiss</div>
        </div>
        <div style={{ top: "6px", right: "15px", position: "absolute", fontSize: "11px", color: "#797979" }}>{timeStamp}</div>
      </div>
    );
  }
}

WavelengthAlert.displayName = "WavelengthAlert";
export default WavelengthAlert;
