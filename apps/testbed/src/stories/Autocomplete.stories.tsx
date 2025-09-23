import { Canvas, Controls, Source, Stories } from "@storybook/blocks";
import { Meta, StoryObj } from "@storybook/react";
import { WavelengthAutoComplete } from "@wavelengthusaf/components";
import { useState } from "react";

const data: string[] = [
  "leo and his hideout",
  "donald",
  "ryan",
  "ceo ryan",
  "adrian",
  "bat",
  "bruce",
  "wayne",
  "super",
  "mr.terrific",
  "noah and the whale",
  "sun",
  "moon",
  "angel",
  "time",
  "apples",
  "kale",
  "dale",
  "mission",
  "christian",
  "zebra",
  "taco",
  "noah",
  "whale",
  "lex",
  "lois",
  "ashanti",
];

// function validateForm(event) {
//   event.preventDefault();
//   //get value by name
//   // const formData = new FormData(event.target);
//   // console.log('formData: ', formData);
//   // const name = formData.get('name');
//   // console.log('name: ', name);

//   //get value by id
//   // const formData = document.getElementById('name') as HTMLInputElement;
//   // const inputValue = formData.value;
//   // console.log('name: ', name);
// }

// // interface AutocompleteProps {
// //   data: string[]; //must somehow make this an array filled a requirement
// //   floatLabel: string;
// //   onDataChange?: (data: string) => void;
// //   height?: string;
// //   width?: string;
// //   inputBorderStyle?: string;
// //   inputFocusBorderColor?: string;
// //   autoBackGroundColor?: string;
// //   labelColor?: string;
// //   focusedLabelColor?: string;
// //   id?: string;
// //   name?: string;
// // }

const meta: Meta<typeof WavelengthAutoComplete> = {
  title: "Inputs/WavelengthAutoComplete",
  component: WavelengthAutoComplete,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
    docs: {
      page: () => (
        <>
          <h1>WavelengthAutoComplete Documentation</h1>
          <p>
            The <code>WavelengthAutoComplete</code>is a web component that provides a text input field with a list of suggested options, based on the user's input. This component suggests relevant
            results as the user types, making data entry and search more efficient. You are able to pass in a function through <code>onDataChange</code> to handle input processing.
          </p>

          <h2>Usage</h2>
          <p>
            To use the <code>WavelengthAutoComplete</code>, simply import it and set the desired props.
          </p>

          <Source code="import { WavelengthAutoComplete } from '@wavelengthusaf/components';" language="tsx" />

          <h2>Code Implementation</h2>

          <p>Below is a code implementation example of how the component can be used.</p>

          <Source
            code="interface AutocompleteProps {
data: string[];
floatLabel: string;
onDataChange?: (data: string) => void;
height?: string;
width?: string;
inputBorderStyle?: string;
inputFocusBorderColor?: string;
autoBackGroundColor?: string;
labelColor?: string;
focusedLabelColor?: string;
id?: string;
name?: string;
}';"
            language="tsx"
          />
          <p>
            A <code>data</code> array, <code>onDataChange</code> function, and a <code>floatLabel</code> string are required for the minimal required code input to function. Below is an example of a
            code implementation to be able to use the component. Press <code>Enter</code> for submitting data through <code>onDataChange</code>.
          </p>

          <Source
            code='const data: string[] = ["leo and his hideout", "donald", "ryan", "ceo ryan", "dak"];
const [dataFromChild, setDataFromChild] = useState(""); //get data from auto to show up in parent
const handleDataFromChild = (data: string) => {
  setDataFromChild(data);
};

<WavelengthAutoComplete onDataChange={handleDataFromChild} floatLabel={"name"} data={data} />;
<p>{dataFromChild}</p>'
            language="tsx"
          />

          <p>
            you may use a <code>useState</code> for form manipulation as in the example above, or use the <code>id</code> prop, or <code>name</code> prop to send data from the input.
          </p>

          <Source
            code="const [nameTest, setNameTest] = useState<string>('');

function validateForm(event) {
event.preventDefault();
//get value by name
const formData = new FormData(event.target);
const name = formData.get('name')?.toString() || '';
setNameTest(name);

//get value by id
const formData = document.getElementById('name') as HTMLInputElement;
const inputValue = formData.value;
}

<div>
<form onSubmit={validateForm}>
<WavelengthAutoComplete onDataChange={handleDataFromChild} floatLabel={'name'} data={data} />;
<button type='submit'>submit</button>
</form>
<p>name: {nameTest}</p>
</div>"
            language="tsx"
          />

          <p>For the use case where the autocomplete to be used in a Multi-Input form situation or a singular form, we recommend these patterns: </p>
          <h3>Multi Form Inputs</h3>

          <Source
            code="function validateForm(event) {
event.preventDefault();
//get value by name
const formData = new FormData(event.target);
const username = formData.get('username')?.toString() || '';
const password = formData.get('password')?.toString() || '';
const email = formData.get('email')?.toString() || '';
setNameTest(name);
}

<div>
<form onSubmit={validateForm}>
<WavelengthAutoComplete id={'username'} name={'username'} onDataChange={handleDataFromChild} floatLabel={'username'} data={data} />;
<WavelengthAutoComplete id={'password'} name={'password'} onDataChange={handleDataFromChild} floatLabel={'password'} data={data} />;
<WavelengthAutoComplete id={'email'} name={'email'} onDataChange={handleDataFromChild} floatLabel={'email'} data={data} />;
<button type='submit'>submit</button>
</form>
<p>name: {nameTest}</p>
</div>"
            language="tsx"
          />

          <h3>Combination of Multi & Singular Inputs Processing</h3>
          <p>If the use case calls for a user to update the input individually or update the components in simultaneous fashion, we recommend this example: </p>
          <p>
            Using <code>Enter</code> for singular inputs inserts or updates, and the form for multi input inserts or updates
          </p>

          <Source
            code="const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
    });
    
function validateForm(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const name = formData.get('username')?.toString() || '';
  const email = formData.get('email')?.toString() || '';
  const password = formData.get('password')?.toString() || '';

  setFormData(() => ({
    email: email,
    name: name,
    password: password,
  }));
}
  
<div>
          <form onSubmit={validateForm}>
            <WavelengthAutoComplete
              data={data}
              floatLabel='username'
              onDataChange={(data: string) => {
                setFormData((prev) => ({
                  ...prev,
                  username: data,
                }));
              }}
              height='51px'
              width='350px'
              inputBorderStyle=''
              inputFocusBorderColor=''
              labelColor=''
              autoBackGroundColor=''
              focusedLabelColor=''
              id='username'
              name='username'
            />
            <WavelengthAutoComplete
              data={data}
              floatLabel='email'
              onDataChange={(data: string) => {
                setFormData((prev) => ({
                  ...prev,
                  email: data,
                }));
              }}
              height='51px'
              width='350px'
              inputBorderStyle=''
              inputFocusBorderColor=''
              labelColor=''
              autoBackGroundColor=''
              focusedLabelColor=''
              id='email'
              name='email'
            />
            <WavelengthAutoComplete
              data={data}
              floatLabel='password'
              onDataChange={(data: string) => {
                setFormData((prev) => ({
                  ...prev,
                  password: data,
                }));
              }}
              height='51px'
              width='350px'
              inputBorderStyle=''
              inputFocusBorderColor=''
              labelColor=''
              autoBackGroundColor=''
              focusedLabelColor=''
              id='password'
              name='password'
            />
            <button type='submit'>submit</button>
          </form>
          <p>formData email: {formData.email}</p>
          <p>formData name: {formData.name}</p>
          <p>formData password: {formData.password}</p>
        </div>"
            language="tsx"
          />

          <h2>Example WavelengthAutoComplete</h2>
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
type Story = StoryObj<typeof WavelengthAutoComplete>;

export const DefaultAutoComplete: Story = {
  argTypes: {
    data: {
      control: "object",
      description: "Defines what strings can be input and displayed in the dropdown.",
    },
    floatLabel: {
      control: "text",
      description: "Defines what label is displayed on top of the input.",
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
      description: "Defines what color the background of the autocomplete will be, allowing you to control what the formatting will look like in any environment.",
    },
    focusedLabelColor: {
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
    //onDataChange: handleDataFromChild,
    floatLabel: "name",
    height: "51px",
    width: "350px",
    inputBorderStyle: "2px solid #ccc",
    inputFocusBorderColor: "#4a90e2",
    labelColor: "#ccc",
    autoBackGroundColor: "#FFFFFF",
    focusedLabelColor: "#4a90e2",
    id: "name",
    name: "name",
  },

  render: function Render(args) {
    const [dataFromChild, setDataFromChild] = useState(""); //get data from auto to show up in parent
    const handleDataFromChild = (data: string) => {
      setDataFromChild(data);
    };

    const { onDataChange, ...rest } = args;

    return (
      <>
        <div>
          <WavelengthAutoComplete onDataChange={handleDataFromChild} {...rest} />
          <p>data: {dataFromChild}</p>
        </div>
      </>
    );
  },
};

export const MultiAutoComplete: Story = {
  argTypes: {
    data: {
      control: "object",
      description: "Defines what strings can be input and displayed in the dropdown.",
    },
    floatLabel: {
      control: "text",
      description: "Defines what label is displayed on top of the input.",
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
    focusedLabelColor: {
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
    // onDataChange: handleDataFromChild,
    floatLabel: "name",
    height: "51px",
    width: "350px",
    inputBorderStyle: "2px solid #ccc",
    inputFocusBorderColor: "#4a90e2",
    labelColor: "#ccc",
    autoBackGroundColor: "#FFFFFF",
    focusedLabelColor: "#4a90e2",
    id: "name",
    name: "name",
  },

  render: function Render(args) {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      password: "",
    });

    function validateForm(event) {
      event.preventDefault();
      const formData = new FormData(event.target);
      const name = formData.get("username")?.toString() || "";
      const email = formData.get("email")?.toString() || "";
      const password = formData.get("password")?.toString() || "";

      setFormData(() => ({
        email: email,
        name: name,
        password: password,
      }));
    }

    const { onDataChange, ...rest } = args;

    return (
      <>
        <div>
          <form onSubmit={validateForm}>
            <WavelengthAutoComplete
              data={data}
              floatLabel="username"
              onDataChange={(data: string) => {
                setFormData((prev) => ({
                  ...prev,
                  name: data,
                }));
              }}
              height="51px"
              width="350px"
              inputBorderStyle=""
              inputFocusBorderColor=""
              labelColor=""
              autoBackGroundColor=""
              focusedLabelColor=""
              id="username"
              name="username"
            />
            <WavelengthAutoComplete
              data={data}
              floatLabel="email"
              onDataChange={(data: string) => {
                setFormData((prev) => ({
                  ...prev,
                  email: data,
                }));
              }}
              height="51px"
              width="350px"
              inputBorderStyle=""
              inputFocusBorderColor=""
              labelColor=""
              autoBackGroundColor=""
              focusedLabelColor=""
              id="email"
              name="email"
            />
            <WavelengthAutoComplete
              data={data}
              floatLabel="password"
              onDataChange={(data: string) => {
                setFormData((prev) => ({
                  ...prev,
                  password: data,
                }));
              }}
              height="51px"
              width="350px"
              inputBorderStyle=""
              inputFocusBorderColor=""
              labelColor=""
              autoBackGroundColor=""
              focusedLabelColor=""
              id="password"
              name="password"
            />
            <button type="submit">submit</button>
          </form>
          <p>formData email: {formData.email}</p>
          <p>formData name: {formData.name}</p>
          <p>formData password: {formData.password}</p>
        </div>
      </>
    );
  },
};

// for creating native web components, for height and width, do you have to specify it to only take numbers or can it take percentages?
// https://medium.com/@anushkasingh801/handling-multi-input-forms-in-react-a-junior-developers-guide-5f8159051b1b
