import React from "react";
import { getPalette } from "../../themes/Palette";
import Grid from "@mui/material/Grid";

interface HeaderProps {
  numberOfPlanes?: number;
  trailDir?: "right" | "left";
  color?: string;
  opacity?: number;
  gradient?: boolean;
}

interface PlaneGridProps {
  opacity: number;
}

export function WavelengthManyPlanes({ numberOfPlanes = 5, trailDir = "left", color, opacity = 1, gradient = false }: HeaderProps) {
  let direction: "row-reverse" | "row" = "row-reverse";
  let flippy: "rotate(180)" | "" = "";

  const palette = getPalette();
  const colorish: string = color ? color : palette.primary;

  if (trailDir !== "right") {
    direction = "row";
    flippy = "rotate(180)";
  }

  const PlaneGrid = ({ opacity }: PlaneGridProps) => {
    return (
      <Grid item>
        <svg width="40" height="40" viewBox="0 0 40 40" transform={flippy} fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="mask0_56_851" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
            <rect x="40" width="40" height="40" transform="rotate(90 40 0)" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_56_851)">
            <path
              d="M4.16662 14.8988L5.76079 14.8988L8.16454 18.1359L18.2616 18.1359L14.1291 4.16669L16.2425 4.16669L24.5075 18.1359L33.985 18.1359C34.5022 18.1359 34.9422 18.3172 35.305 18.68C35.6677 19.0428 35.8491 19.4828 35.8491 20C35.8491 20.5172 35.6677 20.9572 35.305 21.32C34.9422 21.6828 34.5022 21.8642 33.985 21.8642L24.5075 21.8642L16.2425 35.8334L14.1291 35.8334L18.2616 21.8642L8.19662 21.8642L5.76079 25.1013L4.16662 25.1013L5.64329 20L4.16662 14.8988Z"
              fillOpacity={opacity}
              fill={colorish}
            />
          </g>
        </svg>
      </Grid>
    );
  };

  const PlaneGridWrapper = (size: number, baseOpacity: number) => {
    const planes: React.JSX.Element[] = [];

    if (gradient) {
      for (let i = 0; i < size; i++) {
        const currentOpacity = baseOpacity - (i / (size - 1)) * (baseOpacity - 0.05);
        planes.push(<PlaneGrid opacity={currentOpacity} key={i} />);
      }
    } else {
      for (let i = 0; i < size; i++) {
        planes.push(<PlaneGrid opacity={baseOpacity} key={i} />);
      }
    }

    return (
      <Grid container alignItems={"center"} flexDirection={direction} spacing={3}>
        {planes}
      </Grid>
    );
  };

  return PlaneGridWrapper(numberOfPlanes, opacity);
}

export default WavelengthManyPlanes;
