import { Canvas, Controls, Source, Stories } from "@storybook/blocks";
import { Meta, StoryObj } from "@storybook/react";
import { WavelengthDatePicker } from "@wavelengthusaf/components";

const meta: Meta<typeof WavelengthDatePicker> = {
  title: "Inputs/WavelengthDatePicker",
  component: WavelengthDatePicker,
  parameters: {
    layout: "padded",
    backgrounds: {
      default: "dark",
    },
    docs: {
      page: () => (
        <>
          <h1>WavelengthDatePicker Documentation</h1>
          <p>
            The <code>WavelengthDatePicker</code>is a web component that provides a text input field that allows users to select a date or an input allows users to input a date and time local to user
            in order to pass date and time information through. The Date picker's type may be changed to accept either argument of <code> "date" | "datetime-local"</code> in order to change the type
            of input. The input returns a date object that can be parsed as a string.
          </p>

          <h2>Usage</h2>
          <p>
            To use the <code>WavelengthDatePicker</code>, simply import it and set the desired props.
          </p>

          <Source code="import { WavelengthDatePicker } from '@wavelengthusaf/components';" language="tsx" />

          <h2>Code Implementation</h2>

          <Source code="import { WavelengthDatePicker } from '@wavelengthusaf/components';" language="tsx" />
          <p>
            A <code>labelVariant</code> string, <code>inputTimeType</code> string that accepts <code>type</code> of <code> "date" | "datetime-local"</code> , and an <code>OnDataChange</code> function
            argument of <code>(Date) =&gt; void;</code> are required for the minimal required code input for the component to function. Below is an example of a code implementation to be able to use
            the component. When using type <code>"date"</code>, the recommendation is to use <code>toUTCString()</code> in conjunction to return accurate time data with string as dates are passed
            default with the user's timezone, and may not return a correct result.
          </p>

          <p>
            The <code>DateInputProps</code> interface display all the current props that be used with the component.
          </p>
          <Source
            code=' type timeVariant = "date" | "datetime-local" | "";

interface DateInputProps {
  floatLabel: string;
  OnDataChange?: (data: Date) => void;
  height?: string;
  width?: string;
  min?: string; //"YYYY-MM-DD"
  max?: string; //"YYYY-MM-DD"
  inputTimeType: timeVariant;
  labelColor?: string;
  inputBorderStyle?: string;
  inputFocusBorderColor?: string;
  backgroundColor?: string;
  FocusLabelColor?: string;
  id?: string;
  name?: string;
}'
            language="tsx"
          />

          <p>Below is a code implementation example of how the component can be used.</p>
          <h2>For type="datetime-local"</h2>

          <Source
            code='  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    <div>
      <p>test : {selectedDate?.toString()}</p>
      <WavelengthDatePicker
        floatLabel="start"
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
        id=""
        name=""
      />
    </div>'
            language="tsx"
          />

          <h2>For type="date"</h2>

          <Source
            code='  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    <div>
      <p>test : {selectedDate?.toUTCString().split(" ").slice(0, 4).join(" ")}</p> //for type date this returns GMT-0000, slicing helps give the correct string
      <WavelengthDatePicker
        floatLabel="start"
        height="60px"
        width="250px"
        inputTimeType="date"
        min="1990-01-01"
        max="2030-01-01"
        OnDataChange={setSelectedDate}
        labelColor=""
        borderColor=""
        FocusBorderColor=""
        backgroundColor=""
        FocusLabelColor=""
        id=""
        name=""
      />
    </div>'
            language="tsx"
          />

          <h3>Multi form inputs Data Handling</h3>
          <p>If the user is required to send data through a form or data handling in a non sequential manner, we recommend this example below: </p>

          <Source
            code='const [selectedDates, setSelectedDates] = useState<Date[]>([new Date(), new Date(), new Date()]);
            
function validateForm(event) {
event.preventDefault();
console.log("selectedDates after submit: ", selectedDates); //process the selected Data here, i.e. send to API
}

<form onSubmit={validateForm}>
<WavelengthDatePicker
  id="dateOne"
  name="dateOne"
  floatLabel={floatLabel}
  inputTimeType={inputTimeType}
  OnDataChange={(data: Date) => {
    setSelectedDates((prevDates) => {
      const updatedDates = [...prevDates];
        updatedDates[0] = data;
          return updatedDates;
        });
      }}
        />
<WavelengthDatePicker
  id="dateTwo"
  name="dateTwo"
  floatLabel={floatLabel}
  inputTimeType={inputTimeType}
  OnDataChange={(data: Date) => {
    setSelectedDates((prevDates) => {
      const updatedDates = [...prevDates];
        updatedDates[1] = data;
            return updatedDates;
      });
    }}
      />
<WavelengthDatePicker
  id="dateThree"
  name="dateThree"
  floatLabel={floatLabel}
  inputTimeType={inputTimeType}
  OnDataChange={(data: Date) => {
    setSelectedDates((prevDates) => {
      const updatedDates = [...prevDates];
        updatedDates[2] = data;
            return updatedDates;
        });
      }}
    />
<button type="submit">submit</button>
</form>
<p>dateOne: {selectedDates[0].toDateString()}</p>
<p>dateTwo: {selectedDates[1].toDateString()}</p>
<p>dateThree: {selectedDates[2].toDateString()}</p>'
            language="tsx"
          />

          <h2>Example WavelengthDatePicker</h2>
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
type Story = StoryObj<typeof WavelengthDatePicker>;

export const Default: Story = {
  argTypes: {
    floatLabel: {
      control: "text",
      description: "Defines what label is displayed on top of the input.",
    },
    OnDataChange: {
      description: "A parameter that takes in the argument of <code>((Date) => void</code>. You may pass a function with these parameters. This allows you to pass a Date object through the input.",
    },
    height: {
      control: "text",
      description: "Defines the height dimension of the component",
    },
    width: {
      control: "text",
      description: "Defines the width dimension of the component",
    },
    min: {
      control: "text",
      description: "Defines the minimum date range for the calendar and for the input that can be chosen",
    },
    max: {
      control: "text",
      description: "Defines the maximum date range for the calendar and for the input that can be chosen",
    },
    inputTimeType: {
      options: ["date", "datetime-local"],
      control: "radio",
      description: "Defines what type of input the component will be.",
    },
    labelColor: {
      control: "text",
      description: "Accepts the CSS color code of what the floating label will be in the center of the input unfocused.",
    },
    inputBorderStyle: {
      control: "text",
      description: "Accepts the CSS color code and size of what the border of the input will be",
    },
    inputFocusBorderColor: {
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
    id: {
      control: "text",
      description: "Defines the id naming convention of the overall component, can be used for form access.",
    },
    name: {
      control: "text",
      description: "Defines the name attribute of the input, can be used for form access.",
    },
  },
  args: {
    floatLabel: "stop",
    inputTimeType: "datetime-local",
    min: "1990-01-01",
    max: "2024-01-01",
    height: "40px",
    width: "250px",
    labelColor: "#ccc",
    backgroundColor: "#FFFFFF",
    FocusLabelColor: "#4a90e2",
    inputFocusBorderColor: "#4a90e2",
    inputBorderStyle: "2px solid #ccc",
    id: "name",
    name: "name",
  },
  // render: function Render(args) {
  //   const [selectedDate, setSelectedDate] = useState<Date>(new Date(""));

  //   const { floatLabel, inputTimeType, ...rest } = args;
  //   //const formattedDate: string = selectedDate.toUTCString().split(" ").slice(0, 4).join(" ");
  //   const typeDate = inputTimeType;
  //   //const formattedDate: string = selectedDate.toUTCString().split(" ").slice(0, 4).join(" ");
  //   if (typeDate === "datetime-local") {
  //     return (
  //       <>
  //         <WavelengthDatePicker floatLabel={floatLabel} inputTimeType={inputTimeType} {...rest} OnDataChange={setSelectedDate} />
  //         <div
  //           style={{
  //             alignContent: "center",
  //             justifyContent: "center",
  //           }}
  //         >
  //           <p>test : {selectedDate?.toString()}</p>
  //         </div>
  //       </>
  //     );
  //   } else if (typeDate === "date") {
  //     return (
  //       <>
  //         <WavelengthDatePicker floatLabel={floatLabel} inputTimeType={inputTimeType} {...rest} OnDataChange={setSelectedDate} />
  //         <div
  //           style={{
  //             alignContent: "center",
  //             justifyContent: "center",
  //           }}
  //         >
  //           <p>test : {selectedDate?.toUTCString().split(" ").slice(0, 4).join(" ")}</p>
  //         </div>
  //       </>
  //     );
  //   }
  // },
} satisfies Story;

export const MultiDatePicker: Story = {
  args: {
    floatLabel: "stop",
    inputTimeType: "datetime-local",
    min: "1990-01-01",
    max: "2024-01-01",
    height: "40px",
    width: "250px",
    labelColor: "#ccc",
    backgroundColor: "#FFFFFF",
    FocusLabelColor: "#4a90e2",
    inputFocusBorderColor: "#4a90e2",
    inputBorderStyle: "2px solid #ccc",
    id: "name",
    name: "name",
  },
  // render: function Render(args) {
  //   const { floatLabel, inputTimeType, ...rest } = args;
  //   const [selectedDates, setSelectedDates] = useState<Date[]>([new Date(), new Date(), new Date()]);

  //   function validateForm(event) {
  //     event.preventDefault();
  //     console.log("selectedDates after submit: ", selectedDates);
  //   }

  // return (
  //   <>
  //     <form onSubmit={validateForm}>
  //       <WavelengthDatePicker
  //         id="dateOne"
  //         name="dateOne"
  //         floatLabel={floatLabel}
  //         inputTimeType={inputTimeType}
  //         {...rest}
  //         OnDataChange={(data: Date) => {
  //           setSelectedDates((prevDates) => {
  //             const updatedDates = [...prevDates];
  //             updatedDates[0] = data;
  //             return updatedDates;
  //           });
  //         }}
  //       />
  //       <WavelengthDatePicker
  //         id="dateTwo"
  //         name="dateTwo"
  //         floatLabel={floatLabel}
  //         inputTimeType={inputTimeType}
  //         {...rest}
  //         OnDataChange={(data: Date) => {
  //           setSelectedDates((prevDates) => {
  //             const updatedDates = [...prevDates];
  //             updatedDates[1] = data;
  //             return updatedDates;
  //           });
  //         }}
  //       />
  //       <WavelengthDatePicker
  //         id="dateThree"
  //         name="dateThree"
  //         floatLabel={floatLabel}
  //         inputTimeType={inputTimeType}
  //         {...rest}
  //         OnDataChange={(data: Date) => {
  //           setSelectedDates((prevDates) => {
  //             const updatedDates = [...prevDates];
  //             updatedDates[2] = data;
  //             return updatedDates;
  //           });
  //         }}
  //       />
  //       <button type="submit">submit</button>
  //     </form>
  //     <p>dateOne: {selectedDates[0].toDateString()}</p>
  //     <p>dateTwo: {selectedDates[1].toDateString()}</p>
  //     <p>dateThree: {selectedDates[2].toDateString()}</p>
  //   </>
  // );
  // },
} satisfies Story;
