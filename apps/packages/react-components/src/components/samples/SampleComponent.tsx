import React, { useRef, useEffect } from "react";
import "@wavelengthusaf/web-components";

interface SampleComponentProps extends React.HTMLAttributes<HTMLElement> {
  testProp?: string; // <-- Add more props as your web component supports them
}

export const SampleComponent: React.FC<SampleComponentProps> = ({
  testProp,
  children,
  ...rest // This rest operator includes className, style, onClick, etc.
}) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Dynamically assign props to the Web Component
    if (testProp !== undefined) {
      el.setAttribute("test-prop", testProp);
    }

    //////////////////////////////////////////////////////////////////////
    // TODO: Add more attribute bindings here as your component evolves //
    //////////////////////////////////////////////////////////////////////
  }, [testProp]);

  // This is where the Web Component is placed; You'll use the below props in-place of your components props
  return (
    <sample-component ref={ref} {...rest}>
      {children}
    </sample-component>
  );
};

// This line ensures that the "show code" portion of this component's story in Storybook is named properly
SampleComponent.displayName = "SampleComponent";

export default SampleComponent;
