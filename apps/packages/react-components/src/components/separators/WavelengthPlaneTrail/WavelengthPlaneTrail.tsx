import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import { getPalette } from "../../../themes/Palette";

interface WavelengthPlaneTrailProps {
  trailDir?: "right" | "left";
  color?: string;
  id?: string;
}
//trailX indicates the directions that the trail starts in corelation to the plane
//if the plane is pointing/going right, then the direction will be trailR. and vice versa
// //if it looks backwards in css this is why
// export function WavelengthPlaneTrail({ trailDir = "right" }: WavelengthPlaneTrailProps) {

export function WavelengthPlaneTrail({ trailDir = "right", id, color }: WavelengthPlaneTrailProps) {
  //#region CSS
  // Retrieves the Palette for this Component
  let direction: "row-reverse" | "row" = "row-reverse";
  let flippy: "rotate(180)" | "" = "";

  if (trailDir !== "right") {
    direction = "row";
    flippy = "rotate(180)";
  } else {
    direction = "row-reverse";
    flippy = "";
  }

  const palette = getPalette();

  //#endregion

  return (
    <Grid container alignItems={"center"} flexDirection={direction}>
      {/* <Grid item id={planeDir}> testExample is working test,replace when done */}
      <Grid item id={id}>
        <svg width="40" height="40" viewBox="0 0 40 40" transform={flippy} fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="mask0_56_851" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
            <rect x="40" width="40" height="40" transform="rotate(90 40 0)" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_56_851)">
            <path
              d="M4.16662 14.8988L5.76079 14.8988L8.16454 18.1359L18.2616 18.1359L14.1291 4.16669L16.2425 4.16669L24.5075 18.1359L33.985 18.1359C34.5022 18.1359 34.9422 18.3172 35.305 18.68C35.6677 19.0428 35.8491 19.4828 35.8491 20C35.8491 20.5172 35.6677 20.9572 35.305 21.32C34.9422 21.6828 34.5022 21.8642 33.985 21.8642L24.5075 21.8642L16.2425 35.8334L14.1291 35.8334L18.2616 21.8642L8.19662 21.8642L5.76079 25.1013L4.16662 25.1013L5.64329 20L4.16662 14.8988Z"
              fill={color ? color : palette.primary}
            />
          </g>
        </svg>
      </Grid>
      <Grid item style={{ width: "75%" }} id="trailExample">
        <Divider variant="middle" sx={{ bgcolor: color ? color : palette.primary }} />
      </Grid>
    </Grid>
  );
}

WavelengthPlaneTrail.displayName = "WavelengthPlaneTrail";

export default WavelengthPlaneTrail;
