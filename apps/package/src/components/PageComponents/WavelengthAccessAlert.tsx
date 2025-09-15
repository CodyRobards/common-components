import React from "react";
import WavelengthAppLogo from "../logos/applogo/WavelengthAppLogo";
import WavelengthStyledButton from "../buttons/WavelengthButton/WavelengthStyledButton";
import CheckIcon from "@mui/icons-material/Check";
import NotInterestedIcon from "@mui/icons-material/NotInterested";

interface AccessAlertProps {
  height?: string;
  width?: string;
  access?: "Access Request" | "Access Granted" | "Access Denied";
  appAdmin?: string;
  time?: string;
  requestorName?: string;
  appNickname?: string;
  message?: string;
  appLogo?: string;
  dataTestId?: string;

  backgroundColor?: string;

  onClear?: React.MouseEventHandler<HTMLAnchorElement> | undefined;
}
export function WavelengthAccessAlert({
  height = "100px",
  dataTestId,
  width = "244px",
  time = "2m ago",
  access = "Access Request",
  appNickname = "App Nickname",
  appLogo = "wings",
  appAdmin = "app.admin.1",
  requestorName = "joes.user.1",
}: AccessAlertProps) {
  if (access === "Access Request") {
    return (
      <div
        data-testid={dataTestId}
        style={{
          width: width,
          height: height,
          border: "1px solid rgba(0, 0, 0, 0.6)",
          borderRadius: "6px",
          position: "relative",
          padding: "8px 10px 2px 10px",
          display: "grid",
          gridTemplateColumns: "1fr 3fr 2fr",
          gridTemplateRows: "1fr 1fr 1fr",
          boxSizing: "border-box",
        }}
      >
        <div style={{ fontSize: "8px", fontWeight: 400, position: "absolute", top: "5px", right: "12px" }}>{time}</div>
        <div style={{ fontWeight: 700, fontSize: "12px", color: "rgba(248, 136, 5, 1)", marginTop: "5px", marginLeft: "5px", gridArea: "1/2/1/3" }}>{access}</div>
        <div style={{ gridArea: "2/1/3/2" }}>
          <WavelengthAppLogo name={appLogo} width={22} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gridArea: "2/2/3/4", fontSize: "10px", gap: "4px", marginLeft: "5px" }}>
          <label htmlFor="">Requestor: {requestorName}</label> <label htmlFor="">{appNickname}</label>
        </div>
        <WavelengthStyledButton
          type="default"
          styles={{ backgroundColor: "rgba(143, 143, 143, 1)", marginTop: "5px", borderRadius: "5px", height: "22px", width: "44px", gridArea: "3/4/3/4", color: "white" }}
        >
          clear
        </WavelengthStyledButton>
      </div>
    );
  } else if (access === "Access Granted") {
    return (
      <div
        data-testid={dataTestId}
        style={{
          width: width,
          height: height,
          border: "1px solid rgba(0, 0, 0, 0.6)",
          borderRadius: "6px",
          position: "relative",
          padding: "8px 10px 2px 10px",
          display: "grid",
          gridTemplateColumns: "1fr 3fr 2fr",
          gridTemplateRows: "1fr 1fr 1fr",
          boxSizing: "border-box",
        }}
      >
        <div style={{ fontSize: "8px", fontWeight: 400, position: "absolute", top: "5px", right: "12px" }}>{time}</div>
        <div style={{ fontWeight: 700, fontSize: "12px", marginTop: "5px", marginLeft: "5px", gridArea: "1/2/1/4", display: "flex", alignItems: "center" }}>
          <CheckIcon fontSize="small" sx={{ color: "rgba(36, 226, 32, 1)", width: "16px" }} />
          {access}
        </div>

        <div style={{ gridArea: "2/1/3/2" }}>
          {" "}
          <WavelengthAppLogo name={appLogo} width={22} />{" "}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gridArea: "2/2/3/4", fontSize: "10px", marginLeft: "5px" }}>
          <div style={{ fontWeight: 700, fontSize: "10px" }}>{appNickname}</div>
          <label htmlFor="" style={{ marginTop: "5px" }}>
            {appAdmin}
          </label>{" "}
          <label htmlFor="">Added you as a user</label>
        </div>
        <WavelengthStyledButton type="default" styles={{ backgroundColor: "rgba(143, 143, 143, 1)", borderRadius: "5px", height: "22px", width: "44px", gridArea: "3/4/3/4", color: "white" }}>
          clear
        </WavelengthStyledButton>
      </div>
    );
  } else {
    return (
      <div
        data-testid={dataTestId}
        style={{
          width: width,
          height: height,
          border: "1px solid rgba(0, 0, 0, 0.6)",
          borderRadius: "6px",
          position: "relative",
          padding: "8px 10px 2px 10px",
          display: "grid",
          gridTemplateColumns: "1fr 3fr 2fr",
          gridTemplateRows: "1fr 1fr 1fr",
          boxSizing: "border-box",
        }}
      >
        <div style={{ fontSize: "8px", fontWeight: 400, position: "absolute", top: "5px", right: "12px" }}>{time}</div>
        <div style={{ fontWeight: 700, fontSize: "12px", marginTop: "5px", marginLeft: "5px", gridArea: "1/2/1/4", display: "flex", alignItems: "center" }}>
          <NotInterestedIcon fontSize="small" sx={{ color: "rgba(234, 30, 30, 1)", width: "16px" }} />
          {access}
        </div>

        <div style={{ gridArea: "2/1/3/2" }}>
          <WavelengthAppLogo name={appLogo} width={22} />{" "}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gridArea: "2/2/3/4", fontSize: "10px", marginLeft: "5px" }}>
          <div style={{ fontWeight: 700, fontSize: "10px" }}>{appNickname}</div>
          <label htmlFor="" style={{ marginTop: "5px" }}>
            {appAdmin}
          </label>{" "}
          <label htmlFor="">Denied your request</label>
        </div>
        <WavelengthStyledButton type="default" styles={{ backgroundColor: "rgba(143, 143, 143, 1)", borderRadius: "5px", height: "22px", width: "44px", gridArea: "3/4/3/4", color: "white" }}>
          clear
        </WavelengthStyledButton>
      </div>
    );
  }
}

WavelengthAccessAlert.displayName = "WavelengthAccessAlert";

export default WavelengthAccessAlert;
