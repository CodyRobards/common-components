import Button from "@mui/material/Button";
import { styled } from "@mui/system";

import React, { ReactNode } from "react";

// These are the properties we can customize
interface ButtonProps {
  onClick?: any;
  children?: ReactNode;
}

interface IconProps {
  text: string;
  numIcon?: string;
  children: ReactNode;
  active?: boolean;
  width: string;
  height: number;
  fontsize: number;
}

function drawNum(numIcon: string) {
  if (parseInt(numIcon) > 0) {
    return (
      <>
        <circle cx="21" cy="8.25" r="4.5" fill="#FF0A0A" />
        <text x="18.25" y="12.15" fontSize="11" fill="white">
          {numIcon}
        </text>
      </>
    );
  }
}

function drawActive(active: boolean) {
  if (active === true) {
    return <rect x="-20" width="117" height="10" fill="lime" rx="10" ry="10" />;
  }
}

export function ButtonIcon({ text, numIcon = "0", children, active = false, width, height, fontsize }: IconProps) {
  return (
    <>
      <div>
        <div style={{ width: width, height: height }}>
          <svg width="97%" height="100%" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g mask="url(#mask0_234_4026)" transform="translate(2, 2)">
              {children}
              {drawNum(numIcon)}
            </g>
          </svg>
        </div>
        <div>
          <p style={{ color: "white", fontSize: fontsize, fontFamily: "b612", marginTop: -3, marginBottom: -8, padding: 0, textTransform: "capitalize" }}>{text}</p>
          <svg width="50px" height="10px" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(-25, 0)">{drawActive(active)}</g>
          </svg>
        </div>
      </div>
    </>
  );
}

function renderButtonIcon(children: ReactNode) {
  for (const c of React.Children.toArray(children)) {
    const obj = c as { type: { name: string } };
    if (obj.type.name === "ButtonIcon") {
      return c;
    }
  }
}

interface ButtonMenuProps {
  children: ReactNode;
}

export function ButtonMenu({ children }: ButtonMenuProps) {
  return <div style={{ background: "transparent" }}>{children}</div>;
}

function renderButtonMenu(children: ReactNode) {
  for (const c of React.Children.toArray(children)) {
    const obj = c as { type: { name: string } };
    if (obj.type.name === "ButtonMenu") {
      return c;
    }
  }
}

export function WavelengthDropdownButton({ children, onClick }: ButtonProps): React.JSX.Element {
  const TestButton = styled(Button)(() => ({
    height: "45px",
    width: "20px",
    color: "#FFFFFF",
    borderRadius: "30px",
    background: "#2B6DBA",
    borderColor: "#4E4E4E",
    borderWidth: "10px",
  }));

  return (
    <>
      <TestButton onClick={onClick}>
        {renderButtonIcon(children)}
        <br />
        {renderButtonMenu(children)}
      </TestButton>
    </>
  );
}

export default WavelengthDropdownButton;
