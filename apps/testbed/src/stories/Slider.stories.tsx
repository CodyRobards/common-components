import { Mark } from "@mui/material/Slider/useSlider.types";
import { Canvas, Controls, Source, Stories } from "@storybook/blocks";
import { Meta, StoryObj } from "@storybook/react";
import { WavelengthSlider } from "@wavelengthusaf/components";
import { useState } from "react";

// Meta object defining the story metadata
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

const meta: Meta<typeof WavelengthSlider> = {
  title: "Inputs/WavelengthSlider",
  component: WavelengthSlider,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
    docs: {
      page: () => (
        <>
          <h1>WavelengthSlider Documentation</h1>
          <p>
            The <code>WavelengthSlider</code> is a customizable Slider.
          </p>

          <h2>Usage</h2>
          <p>
            To use the <code>WavelengthSlider</code>, simply import it and set the desired props.
          </p>

          <Source code="import { WavelengthSlider } from '@wavelengthusaf/components';" language="tsx" />

          <h2>Example WavelengthSlider</h2>
          <p>Here's an example of the WavelengthSlider:</p>
          <Canvas />
          <h4>onChange function used for onChange and value props for the slider.</h4>
          <Source
            dark
            language="tsx"
            code="const [value, setValue] = useState<number>(1);
const handleChange = (setter: React.Dispatch<React.SetStateAction<number>>) => (_: Event, newValue: number | number[]) => {
    setter(newValue as number);
  };
<WavelengthSlider value={value} handleChange={handleChange(setValue)} minVal={0} maxVal={120} valueDisplayed step={1} />
"
          />
          <h2>Props</h2>
          <Controls />
          <Stories />
        </>
      ),
    },
  },
  tags: ["autodocs"],

  argTypes: {
    minVal: {
      control: "number", // Control type for number
      description: "The minimum value of the slider.", // Description for 'minVal' prop
    },
    maxVal: {
      control: "number", // Control type for number
      description: "The maximum value of the slider.", // Description for 'maxVal' prop
    },
    step: {
      control: "number", // Control type for number
      description: "The step value for the slider (the interval between values).", // Description for 'step' prop
    },
    valueDisplayed: {
      control: "boolean", // Control type for boolean
      description: "Whether or not to display the current value of the slider.", // Description for 'valueDisplayed' prop
    },
    handleChange: {
      description: "Triggered when the slider value changes.", // Description for 'handleChange' prop
    },
    color: {
      control: "color", // Control type for color input
      description: "The color of the slider track.", // Description for 'color' prop
    },
    labelColor: {
      control: "color", // Control type for color input
      description: "The color of the label text for the slider.", // Description for 'labelColor' prop
    },
    width: {
      control: "text", // Control type for text (to specify the width)
      description: "The width of the slider component. E.g., '100%' or '300px'.", // Description for 'width' prop
    },
    marks: {
      control: "object", // Control type for object (marks array for slider)
      description: "Array of marks to display along the slider.", // Description for 'marks' prop
    },
    labelFunc: {
      description: "A function to customize how the label for the slider is displayed. It recieves the value and returns a string to show. (Foir accessibility features).",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Template for rendering the story
const Template: React.FC<sliderProps> = (args) => {
  const [value, setValue] = useState<number>(1);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
    args.handleChange(event, newValue); // Call the passed handleChange prop if needed
  };

  return (
    <>
      <WavelengthSlider {...args} value={value} handleChange={handleChange} />
    </>
  );
};

// Default story for the component
export const BasicSlider: Story = {
  ...Template,
  args: {
    minVal: 0,
    maxVal: 120,
    step: 1,
    valueDisplayed: true,
    handleChange: (event: Event, newValue: number | number[]) => {
      console.log("Slider value changed:", newValue); // Log to Actions tab
    },
  },
};
export const CustomSlider: Story = {
  args: {
    width: "660px",
    color: "rgb(78, 201, 176)",
    valueDisplayed: true,
    labelColor: "white",
    marks: [
      { value: 10, label: "10ml" },
      { value: 30, label: "30ml" },
      { value: 45, label: "45ml" },
      { value: 70, label: "70ml" },
      { value: 100, label: "100ml" },
    ],
    maxVal: 120,
    minVal: 0,
    labelFunc: (val) => `${val}`,
  },
};
