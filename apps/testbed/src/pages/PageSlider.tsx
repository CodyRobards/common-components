import React, { useState } from "react";
import CodeBlock from "../components/CodeBlock/CodeBlock";
import { WavelengthSlider } from "@wavelengthusaf/components";
import ComponentContainer from "../components/ComponentContainer/ComponentContainer";

// Marks for the custom slider
const marks = [
  { value: 10, label: "10ml" },
  { value: 30, label: "30ml" },
  { value: 45, label: "45ml" },
  { value: 70, label: "70ml" },
  { value: 100, label: "100ml" },
];

// Prop description interface
interface PropDescriptionProps {
  propName: string;
  description: string;
}

// Prop description component
const PropDescription: React.FC<PropDescriptionProps> = ({ propName, description }) => (
  <div>
    <h3 className="prop-name">{propName}</h3>
    <span>{description}</span>
  </div>
);

const PageSlider: React.FC = () => {
  // State for slider values
  const [value, setValue] = useState<number>(1);
  const [value2, setValue2] = useState<number>(1);

  // Generic change handler
  const handleChange = (setter: React.Dispatch<React.SetStateAction<number>>) => (_: Event, newValue: number | number[]) => {
    setter(newValue as number);
  };

  return (
    <>
      <span className="page-name">Slider</span>
      <div className="contentBlock">
        <p>A simple slider component.</p>
        <h2>Import Statement</h2>
        <CodeBlock code={`import { WavelengthSlider } from '@wavelengthusaf/components';`} />
      </div>

      {/* Basic Slider Section */}
      <h2>Basic Slider</h2>
      <ComponentContainer>
        <WavelengthSlider value={value} handleChange={handleChange(setValue)} minVal={0} maxVal={120} valueDisplayed step={1} />
      </ComponentContainer>
      <CodeBlock
        code={`const [value, setValue] = useState<number>(1);
const handleChange = (setter: React.Dispatch<React.SetStateAction<number>>) => (_: Event, newValue: number | number[]) => {
    setter(newValue as number);
  };
<WavelengthSlider value={value} handleChange={handleChange(setValue)} minVal={0} maxVal={120} valueDisplayed step={1} />`}
      />

      {/* Props Section */}
      <h2>Props (Required)</h2>
      {[
        { propName: "Value", description: "The initial value of the slider when it first renders. Use this value to retrieve current value of slider. Must be a number." },
        { propName: "handleChange", description: "A function called whenever the value of the slider changes. It receives the event object and the new value." },
        { propName: "step", description: "The step size for the slider, determining the increments in which the value changes (e.g., 1, 0.5, 10)." },
        { propName: "minVal", description: "The minimum value the slider can have. Defaults to 0 if not provided." },
        { propName: "maxVal", description: "The maximum value the slider can have. Defaults to 100 if not provided." },
      ].map(({ propName, description }) => (
        <PropDescription key={propName} propName={propName} description={description} />
      ))}

      {/* Custom Slider Section */}
      <h2 style={{ marginTop: "35px" }}>Custom Slider</h2>
      <ComponentContainer>
        <WavelengthSlider
          width="600px"
          color="rgb(78, 201, 176)"
          valueDisplayed
          value={value2}
          marks={marks}
          labelColor="white"
          step={2}
          maxVal={120}
          minVal={0}
          handleChange={handleChange(setValue2)}
          labelFunc={(val) => `${val} `}
        />
      </ComponentContainer>
      <CodeBlock
        code={`const marks = [{value: 10, label: "10ml"}, {value: 30, label: "30ml"}, {value: 45, label: "45ml"}, {value: 70, label: "70ml"}, {value: 100, label: "100ml"}];
const [value2, setValue2] = useState<number>(1);
 const handleChange = (setter: React.Dispatch<React.SetStateAction<number>>) => (_: Event, newValue: number | number[]) => {
    setter(newValue as number);
  };
<WavelengthSlider width="600px" color="rgb(78, 201, 176)" valueDisplayed marks={marks} step={2} labelColor="white" maxVal={120} minVal={0}  handleChange={handleChange(setValue2)} labelFunc={(val) => \`\${val} \`} />`}
      />

      {/* Custom Slider Props Section */}
      {[
        { propName: "width?", description: "The width of the slider. Can be a string such as '100%' or '400px'." },
        { propName: "marks?", description: "An array of marks to be displayed along the slider. Each mark has a 'value' and an optional 'label'." },
        { propName: "labelColor?", description: "The color of the label text. Accepts any valid CSS color (e.g., 'red', '#ff5733')." },
        { propName: "color?", description: "The color of the slider. This applies to the thumb or the track of the slider." },
        { propName: "valueDisplayed?", description: "Whether the current value of the slider should be displayed on screen." },
        {
          propName: "labelFunc?",
          description: "A function to customize how the label for the slider value is displayed. It receives the value and returns a string to show. (For Accessibility Features)",
        },
      ].map(({ propName, description }) => (
        <PropDescription key={propName} propName={propName} description={description} />
      ))}
    </>
  );
};

export default PageSlider;
