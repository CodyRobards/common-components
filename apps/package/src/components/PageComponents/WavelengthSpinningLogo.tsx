interface ISpinningSvgProps {
  size: number;
  id: "outer-circle" | "middle-circle" | "inner-circle" | "spinning";
  clip: string;
  color: string;
  gradient: boolean;
  radius: number;
}

export function WavelengthSpinningOuterCircle({ size, id, clip, color, gradient, radius }: ISpinningSvgProps) {
  const clip_path: any = {
    third: (
      <clipPath id="clipThird">
        <rect x="0%" y="0%" width="60%" height="50%" />
      </clipPath>
    ),
  };

  let svg_color = <></>;
  if (gradient && color === "blue") {
    svg_color = (
      <linearGradient id={`${id}-color`} x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: "#24AEDF", stopOpacity: 1 }} />
        <stop offset="33.3%" style={{ stopColor: "#297BC9", stopOpacity: 1 }} />
        <stop offset="66.6%" style={{ stopColor: "#435AB1", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#435AB1", stopOpacity: 1 }} />
      </linearGradient>
    );
  } else if (gradient && color === "red") {
    svg_color = (
      <linearGradient id={`${id}-color`} x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: "#ED243A", stopOpacity: 1 }} />
        <stop offset="33.3%" style={{ stopColor: "#ED2A27", stopOpacity: 1 }} />
        <stop offset="66.6%" style={{ stopColor: "#EE522F", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#EE522F", stopOpacity: 1 }} />
      </linearGradient>
    );
  } else if (gradient && color === "yellow") {
    svg_color = (
      <linearGradient id={`${id}-color`} x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: "#F0A63E", stopOpacity: 1 }} />
        <stop offset="33.3%" style={{ stopColor: "#FEE42C", stopOpacity: 1 }} />
        <stop offset="66.6%" style={{ stopColor: "#F8E52C", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#F8E52C", stopOpacity: 1 }} />
      </linearGradient>
    );
  }

  return (
    <div
      id={`${id}`}
      style={{
        width: size,
        height: size,
        margin: 0,
        padding: 0,
        position: "absolute",
      }}
    >
      <svg width={size} height={size} viewBox="0 0 100 100">
        <defs>
          {clip_path[clip]}
          {svg_color}
        </defs>
        <circle cx="50" cy="50" r={radius} stroke={`url(#${id}-color)`} strokeWidth="2" fill="none" clipPath="url(#clipThird)" />
      </svg>
    </div>
  );
}

export default WavelengthSpinningOuterCircle;
