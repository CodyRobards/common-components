import { ReactNode, useState } from "react";
import "./Demo.css";
import { Card, MenuItem, Select } from "@mui/material";
import { WavelengthAppTheme } from "@wavelengthusaf/components";

interface DemoProps {
  children: ReactNode;
}

function Demo({ children }: DemoProps) {
  const [theme, setTheme] = useState("default");

  return (
    <div className="contentBlock">
      <div>
        <h2>Color Pallete</h2>
        <Select
          className="demoSelect"
          value={theme}
          variant="outlined"
          onChange={(e) => {
            setTheme(e.target.value);
          }}
        >
          <MenuItem value={"default"}>default</MenuItem>
          <MenuItem value={"arrow"}>arrow</MenuItem>
          <MenuItem value={"brewery"}>brewery </MenuItem>
          <MenuItem value={"rapidref"}>rapidref </MenuItem>
          <MenuItem value={"swarm"}>swarm </MenuItem>
        </Select>
        <br />
        <br />

        <WavelengthAppTheme.Provider value={{ name: theme }}>
          <Card className="demoContainer" style={{ backgroundColor: "inherit", color: "white" }}>
            {children}
          </Card>
        </WavelengthAppTheme.Provider>
      </div>
    </div>
  );
}

export default Demo;
