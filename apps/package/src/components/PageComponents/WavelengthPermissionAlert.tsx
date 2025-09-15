import React from "react";

interface PermissionAlertProps {
  height?: string;
  width?: string;
  permission?: "Permission Requested" | "Permission Denied";
  applicationName?: string;
  requestorName?: string;
  dateOfRequest?: string;
  backgroundColor?: string;
  unit?: string;
  onDismiss?: React.MouseEventHandler<HTMLAnchorElement> | undefined;
  dataTestId?: string;
}

export function WavelengthPermissionAlert({
  dataTestId,
  height = "112px",
  width = "314px",
  backgroundColor = "white",
  permission,
  applicationName,
  requestorName,
  dateOfRequest,
  onDismiss,
  unit = "No Unit",
}: PermissionAlertProps) {
  return (
    <>
      <div
        data-testid={dataTestId}
        style={{
          width: width,
          height: height,
          backgroundColor: backgroundColor,
          border: "1px solid #5F5F5F",
          borderRadius: "12px",
          display: "flex",
          flexDirection: "column",
          padding: "8px 12px",
          gap: "8px",
          fontSize: "14px",
          fontWeight: 400,
          boxSizing: "border-box",
          fontFamily: "roboto",
        }}
      >
        <div style={{ fontSize: "20px", fontWeight: 400 }}>{permission}</div>
        <div style={{ letterSpacing: "-6%" }}>
          Application: <span style={{ fontWeight: 600, marginLeft: "4px" }}>{applicationName}</span>
        </div>
        <div style={{ letterSpacing: "-6%" }}>
          Requestor:{" "}
          <span style={{ fontWeight: 600, marginLeft: "4px" }}>
            {requestorName}, {"" + unit}
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
          <div style={{ letterSpacing: "-6%" }}>
            Date of Request: <span style={{ fontWeight: 600, marginLeft: "4px" }}>{dateOfRequest}</span>
          </div>{" "}
          <a href="" style={{ color: "black", fontWeight: 600 }} onClick={onDismiss}>
            Dismiss
          </a>{" "}
        </div>
      </div>
    </>
  );
}

WavelengthPermissionAlert.displayName = "WavelengthPermissionAlert";

export default WavelengthPermissionAlert;
