import { Canvas, Controls, Source, Stories } from "@storybook/blocks";
import { Meta, StoryObj } from "@storybook/react";
import { WLAutoComplete } from "@wavelengthusaf/components";

const data: string[] = [
  "leo and his hideout",
  "donald",
  "rian",
  "ceoryan",
  "adrian",
  "bat",
  "bruce",
  "wayne",
  "super",
  "Mr.terrifc",
  "noah and the whale",
  "sun",
  "moon",
  "angel",
  "time",
  "apples",
  "kale",
  "Dale",
  "mission",
  "cristian",
  "zebra",
  "taco",
  "noah",
  "whale",
  "lex",
  "lois",
  "nishant",
];

const handleDataFromChild = (data: string) => {
  alert(data);
};

const meta: Meta<typeof WLAutoComplete> = {
  title: "Inputs/WLAutoComplete",
  component: WLAutoComplete,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
    docs: {
      page: () => (
        <>
          <h1>WLAutoComplete Documentation</h1>
          <p>
            The <code>WLAutoComplete</code>is a web component that provides a text input field with a list of suggested options, based on the user's input. This component suggests relevant results as
            the user types, making data entry and search more efficient. You are able to pass in a function through <code>onDataChange</code> to handle input processing.
          </p>

          <h2>Usage</h2>
          <p>
            To use the <code>WLAutoComplete</code>, simply import it and set the desired props.
          </p>

          <Source code="import { WLAutoComplete } from '@wavelengthusaf/components';" language="tsx" />

          <h2>Code Implementation</h2>
          <p>
            A <code>data</code> array, <code>onDataChange</code> function, and a <code>variant</code> string are required for the minimal required code input to function. Below is an example of a code
            implementation to be able to use the component. Press <code>Enter</code> for submitting data.
          </p>

          <Source
            code='const data: string[] = ["leo and his hideout", "donald", "rian", "ceoryan", "dak"];
const [dataFromChild, setDataFromChild] = useState(""); //get data from auto to show up in parent
const handleDataFromChild = (data: string) => {
  setDataFromChild(data);
};

<WLAutoComplete onDataChange={handleDataFromChild} variant={"name"} data={data} />;
<p>{dataFromChild}</p>'
            language="tsx"
          />

          <p>
            you may use a <code>usestate</code> for form manipulation as in the example above, or use the <code>id</code> prop, or <code>name</code> prop to send data from the input.
          </p>

          <Source
            code="function validateForm(event) {
event.preventDefault();
//get value by name
const formData = new FormData(event.target);
const name = formData.get('name');

//get value by id
const formData = document.getElementById('name') as HTMLInputElement;
const inputValue = formData.value;
}

<form onSubmit={validateForm}>
<WLAutoCompleteTest
  data={data}
  onDataChange={handleDataFromChild}
  floatLabel='name'
  height='51px'
  width='350px'
  inputBorderStyle='2px solid #ccc'
  inputFocusBorderColor='#4a90e2'
  labelColor='#ccc'
  autoBackGroundColor='#FFFFFF'
  FocusedlabelColor='#4a90e2'
  id='name'
  name='name'
/>
</form>"
            language="tsx"
          />

          <h2>Example WLAutoComplete</h2>
          <p>Here's an example of the autocomplete:</p>
          <p>
            With this component, once clicked, the component will list all available strings that are able to be inputted with the dropdown. You make use <code>Enter</code> or <code>click</code> to
            select from from the dropdown so that the value will be inserted into the input, and press enter again to submit.
          </p>
          <p>
            You may scroll through the dropdown using the <code>Up</code>,<code>Down</code> arrow keys or use the scroll bar. If a value unrelated to the dropdown list is entered, once a user clicks
            outside of the input, the value will be cleared.
          </p>
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
type Story = StoryObj<typeof WLAutoComplete>;

export const DefaultAutoComplete: Story = {
  argTypes: {
    data: {
      control: "object",
      description: "Defines what strings can be inputed and displayed in the dropdown.",
    },
    floatLabel: {
      control: "text",
      description: "Defines what label is displayed ontop of the input.",
    },
    height: {
      control: "text",
      description: "Defines the height dimension of the autocomplete.",
    },
    width: {
      control: "text",
      description: "Defines the width dimension of the autocomplete.",
    },
    inputBorderStyle: {
      control: "text",
      description: "Defines the default border style of the input will be.",
    },
    inputFocusBorderColor: {
      control: "text",
      description: "Defines what color the focus border style of the input will be.",
    },
    onDataChange: {
      description:
        "A parameter that takes in the argument of <code>(data: string) => void</code>. You may pass a function with these parameters. The current implementation allows you to  trigger an alert when pressed when the download arrow icon is clicked in the example.",
    },
    labelColor: {
      control: "text",
      description: "Defines what color the label text will be.",
    },
    autoBackGroundColor: {
      control: "text",
      description: "Defines what color the background of the autocomplete will be, allowing you to control what the formating will look like in any environment.",
    },
    FocusedlabelColor: {
      control: "text",
      description: "Defines what color the label of the autocomplete will be when focused.",
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
    data: data,
    onDataChange: handleDataFromChild,
    floatLabel: "name",
    height: "51px",
    width: "350px",
    inputBorderStyle: "2px solid #ccc",
    inputFocusBorderColor: "#4a90e2",
    labelColor: "#ccc",
    autoBackGroundColor: "#FFFFFF",
    FocusedlabelColor: "#4a90e2",
    id: "name",
    name: "name",
  },

  render: function Render(args) {
    return (
      <>
        <div>
          <WLAutoComplete {...args} />
        </div>
      </>
    );
  },
};
