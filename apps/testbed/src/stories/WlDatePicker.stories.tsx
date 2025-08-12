import { Canvas, Controls, Source, Stories } from "@storybook/blocks";
import { Meta, StoryObj } from "@storybook/react";
import { WLDatePicker } from "@wavelengthusaf/components";
import React, { useState } from "react";
import { useArgs } from "@storybook/manager-api";
type timeVariant = "date" | "datetime-local" | "";

const meta: Meta<typeof WLDatePicker> = {
  title: "Inputs/WLDatePicker",
  component: WLDatePicker,
  parameters: {
    layout: "padded",
    backgrounds: {
      default: "dark",
    },
    docs: {
      page: () => (
        <>
          <h1>WLDatePicker Documentation</h1>
          <p>
            The <code>WLDatePicker</code>is a web component that provides a text input field that allows users to select a date or an input allows users to input a date and time local to user in order
            to pass date and time information through. The Date picker's type may be changed to accept either argument of <code> "date" | "datetime-local"</code> in order to change the type of input.
            The input returns a date object that can be parsed as a string.
          </p>

          <h2>Usage</h2>
          <p>
            To use the <code>WLDatePicker</code>, simply import it and set the desired props.
          </p>

          <Source code="import { WLDatePicker } from '@wavelengthusaf/components';" language="tsx" />

          <h2>Code Implementation</h2>
          <p>
            A <code>labelVariant</code> string, <code>inputTimeType</code> string that accepts <code>type</code> of <code> "date" | "datetime-local"</code> , and an <code>OnDataChange</code> function
            argumenet of <code>(Date) =&gt; void;</code> are required for the minimal required code input for the component to function. Below is an example of a code implementation to be able to use
            the component. When using type <code>"date"</code>, the reccomendation is to use <code>toISOString()</code> in conjunction to return accurate time data with string as dates are parsed
            through UTC.
          </p>

          <p>
            The <code>DateInputProps</code> interface display all the current props that be used with the component.
          </p>
          <Source
            code=' type timeVariant = "date" | "datetime-local" | "";

interface DateInputProps {
  labelVariant: string;
  height?: string;
  width?: string;
  min?: string; 
  max?: string; 
  inputTimeType: timeVariant;
  OnDataChange: (data: Date) => void;
  labelColor?: string;
  borderColor?: string;
  FocusBorderColor?: string;
  backgroundColor?: string;
  FocusLabelColor?: string;
}'
            language="tsx"
          />

          <p>Below is a code implementation example of how the component can be used.</p>

          <Source
            code='  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    <div>
      <p>test : {selectedDate?.toString()}</p>
      <WLDatePickertest
        labelVariant="start"
        height="60px"
        width="250px"
        inputTimeType="datetime-local"
        min="1990-01-01"
        max="2030-01-01"
        OnDataChange={setSelectedDate}
        labelColor=""
        borderColor=""
        FocusBorderColor=""
        backgroundColor=""
        FocusLabelColor=""
      />
    </div>'
            language="tsx"
          />

          <h2>Example WLDatePicker</h2>
          <p>Here's an example of the autocomplete:</p>
          <Canvas />
          <h2>Props</h2>
          <Controls />
          <Stories />
        </>
      ),
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultDatePicker = {
  argTypes: {
    labelVariant: {
      control: "text",
      description: "Defines what the floating label value will be on top of the input.",
    },
    inputTimeType: {
      options: ["date", "datetime-local"],
      control: "radio",
      description: "Defines what type of input the component will be.",
    },
    min: {
      control: "text",
      description: "Defines the minimum date range for the calendar and for the input that can be chosen",
    },
    max: {
      control: "text",
      description: "Defines the maximum date range for the calendar and for the input that can be chosen",
    },
    height: {
      control: "text",
      description: "Defines the height dimension of the component",
    },
    width: {
      control: "text",
      description: "Defines the width dimension of the component",
    },
    labelColor: {
      control: "text",
      description: "Accepts the CSS color code of what the floating label will be in the center of the input unfocused.",
    },
    borderColor: {
      control: "text",
      description: "Accepts the CSS color code of what the border of the input will be",
    },
    FocusBorderColor: {
      control: "text",
      description: "Accepts the CSS color code of what the border of the input will be when focused.",
    },
    backgroundColor: {
      control: "text",
      description: "Defines what the background color will be of the input.",
    },
    FocusLabelColor: {
      control: "text",
      description: "Accepts the CSS color code of the floating label when focused, an automatic color is applied when none is provided.",
    },
    onDataChange: {
      description: "A parameter that takes in the argument of <code>((Date) => void</code>. You may pass a function with these parameters. This allows you to pass a Date object through the input.",
    },
  },
  args: {
    labelVariant: "stop",
    inputTimeType: "date",
    min: "1990-01-01",
    max: "2024-01-01",
    height: "40px",
    width: "250px",
    labelColor: "#000000",
    borderColor: "#ccc",
    FocusBorderColor: "#CCFFFF",
    backgroundColor: "#FFFFFF",
    FocusLabelColor: "#0047AB",
  },
  render: function Render(args) {
    const [selectedDate, setSelectedDate] = useState<Date>(new Date(""));

    const { labelVariant, inputTimeType, ...rest } = args;

    return (
      <>
        <WLDatePicker labelVariant={labelVariant} inputTimeType={inputTimeType} {...rest} OnDataChange={setSelectedDate} />
        <div
          style={{
            float: "right",
          }}
        >
          <p>test : {selectedDate?.toString()}</p>
        </div>
      </>
    );
  },
} satisfies Story;
