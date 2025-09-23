import React from "react";
import WavelengthAppLogo from "../logos/applogo/WavelengthAppLogo";
import { WavelengthButton } from "../buttons/WavelengthButton/WavelengthButton";

interface WavelengthNotAvailablePageProps {
  WavelengthAppLogoName?: string;
  errorMessage: string;
  backgroundColor?: string;
  buttonText: string;
  redirectLink?: string;
  buttonColorOne?: string;
  buttonColorTwo?: string;
  id?: string;
}

export function WavelengthNotAvailablePage({ WavelengthAppLogoName, errorMessage, backgroundColor, buttonText, redirectLink, buttonColorOne, buttonColorTwo, id }: WavelengthNotAvailablePageProps) {
  backgroundColor = backgroundColor ? backgroundColor : "gray";
  WavelengthAppLogoName = WavelengthAppLogoName ? WavelengthAppLogoName : "563rdpatch";
  buttonColorOne = buttonColorOne ? buttonColorOne : "white";
  buttonColorTwo = buttonColorTwo ? buttonColorTwo : "#0D5288";

  return (
    <>
      <div id={id} style={{ display: "flex", backgroundColor: backgroundColor, flexDirection: "column", alignItems: "center", height: "100%", justifyContent: "center", gap: 55, padding: "8%" }}>
        <WavelengthAppLogo name={WavelengthAppLogoName} width={300} height={200} grayscale></WavelengthAppLogo>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <p style={{ textAlign: "center", marginBottom: 45, fontSize: 40, color: "white" }}>{`${errorMessage}`}</p>
          <WavelengthButton data-testid="not-available-button" variant="contained" colorOne={buttonColorOne} colorTwo={buttonColorTwo} href={redirectLink}>
            {buttonText}
          </WavelengthButton>
        </div>
      </div>
    </>
  );
}

WavelengthNotAvailablePage.displayName = "WavelengthNotAvailablePage";

export default WavelengthNotAvailablePage;
