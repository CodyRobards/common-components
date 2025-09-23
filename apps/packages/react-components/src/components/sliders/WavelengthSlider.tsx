import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Mark } from "@mui/material/Slider/useSlider.types";
import React from "react";

interface sliderProps {
  width?: string;
  labelColor?: string;
  color?: string;
  value: number;

  valueDisplayed?: boolean;
  minVal: number;
  maxVal: number;
  step: number;
  handleChange: (event: Event, newValue: number | number[]) => void;
  labelFunc?(val: number): string;
  marks?: Mark[];
}

export function WavelengthSlider({ width = "300px", color, valueDisplayed, marks, labelColor, value, maxVal = 100, minVal, step = 1, labelFunc, handleChange }: sliderProps) {
  const on = valueDisplayed ? "on" : "off";

  return (
    <Box sx={{ width: width }}>
      <Slider
        aria-label="Custom marks"
        value={value}
        getAriaValueText={labelFunc}
        step={step}
        marks={marks}
        valueLabelDisplay={on}
        max={maxVal}
        min={minVal}
        onChange={handleChange}
        sx={{
          color: color,
          "& .MuiSlider-markLabel": {
            color: labelColor,
          },
        }}
      />
    </Box>
  );
}

WavelengthSlider.displayName = "WavelengthSlider";

export default WavelengthSlider;
