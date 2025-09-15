import { useEffect, useRef } from "react";
import "../../web-components/input-datepicker";

export const WLInputDatePicker: React.FC = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const el = ref.current;
    if (!el) return;
  }, []);

  return <wavelength-input-date-picker ref={ref} />;
};
WLInputDatePicker.displayName = "WLInputDatePicker";
//WLInputDatePicker
export default WLInputDatePicker;

// import React, { useRef, useEffect } from "react";
// import "../../web-components/sample-component"; // <-- Adjust this import path as needed

// interface SampleComponentProps extends React.HTMLAttributes<HTMLElement> {
//   testProp?: string; // <-- Add more props as your web component supports them
// }

// export const SampleComponent: React.FC<SampleComponentProps> = ({
//   testProp,
//   children,
//   ...rest // This rest operator includes className, style, onClick, etc.
// }) => {
//   const ref = useRef<HTMLElement>(null);

//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;

//     // Dynamically assign props to the Web Component
//     if (testProp !== undefined) {
//       el.setAttribute("test-prop", testProp);
//     }

//     //////////////////////////////////////////////////////////////////////
//     // TODO: Add more attribute bindings here as your component evolves //
//     //////////////////////////////////////////////////////////////////////
//   }, [testProp]);

//   // This is where the Web Component is placed; You'll use the below props in-place of your components props
//   return (
//     <sample-component ref={ref} {...rest}>
//       {children}
//     </sample-component>
//   );
// };

// export default SampleComponent;
