import { WavelengthSearch, SearchProps, SearchResult } from "@wavelengthusaf/components";
import { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { Canvas, Controls, Source, Stories } from "@storybook/blocks";
import { Search } from "@mui/icons-material";

const template: SearchResult[] = [];
// Define the metadata for the Storybook component
const meta: Meta<typeof WavelengthSearch> = {
  title: "Inputs/WavelengthSearch",
  component: WavelengthSearch,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light",
    },
    docs: {
      page: () => (
        <>
          <h1>Wavelength Search Documentation</h1>

          <p>
            The <code>WavelengthSearch</code> component allows users to search a specific list of values for a string.
          </p>
          <h2>Usage</h2>
          <p>
            To use the <code>WavelengthSearch</code> component, import it and set the desired props. Mandatory props include mode and options.
          </p>
          <Source code='import { WavelengthSearch, SearchProps, SearchResult } from "@wavelengthusaf/components";' />
          <h2>Example WavelengthSearch</h2>
          <Canvas />
          <h4>The searchQuery variable will be the options while the setSearchQuery will be called in the handleOnChange function on every keypress.(Automatic)</h4>
          <Source
            language="tsx"
            dark
            code="const [searchQuery, setSearchQuery] = useState(args.options);
const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
const filteredData = args.options.filter((arrItem) => arrItem.title.toLowerCase().includes(e.target.value.toLowerCase()));
setSearchQuery(filteredData);
  };"
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
    height: { description: "Height of the searchbar" },
    width: { description: "Width of the searchbar" },
    size: { description: "Size of the text field", control: "select", options: ["medium", "small"] },
    borderColor: { description: "Color of the border" },
    borderRadius: { description: "Radius of the border" },
    hoverColor: { description: "Color of border when it is hovered" },
    mode: { description: "Automatic for search on each keystroke, or manual for search on enter/ Icon press", options: ["automatic", "manual"], control: "select" },
    type: { description: "text-box for searchbar functionality without the search Icon, search-bar for search icon (default type)", options: ["search-bar", "text-box"] },
    label: { description: "Label that goes inside the searchbar" },
    options: { description: "The array of options the search bar checks and displays" },
    onChange: { description: "A function that happens everytime the input is changed (MUST BE USED WITH AUTOMATIC)" },
    onEnter: { description: "A Function that is called when the Enter Key is pressed (MUST BE USED WITH MANUAL)" },
    onSearchItemSelected: { description: "Function called when an item from the options list is selected" },
    children: { description: "This is where the icon is placed" },
    iconPos: { description: "Location of the children (icon) (Default is end)", options: ["end", "start"], control: "select" },
    backgroundColor: { description: "Color of the search bar's background" },
    fontSize: { description: "Size of the font used inside of the searchbar" },
  },
  args: {
    width: "400px",
    mode: "automatic",
    label: "Search",
    fontSize: "12px",
    height: "",
    size: "medium",
    borderColor: "",
    borderRadius: "30px",
    backgroundColor: "",
    hoverColor: "",
    type: "search-bar",
    children: <Search sx={{ color: "black" }} />,
    options: [
      { id: "1", title: "Harry Potter1", subtitle: "A Movie About Wizards" },
      { id: "2", title: "Harry Potter2", subtitle: "Another Movie About Wizards" },
      { id: "3", title: "Transformers", subtitle: "A Movie About Robots" },
      { id: "4", title: "Avengers", subtitle: "Famous Superhero's Team Up" },
      { id: "5", title: "Random Movie", subtitle: "A Random Movie" },
      { id: "6", title: "Title One", subtitle: "Subtitle for Title One" },
    ],
    onChange: () => {},
    onEnter: () => {},
  },
};
export default meta;

// Define the type of Story using StoryObj
type Story = StoryObj<typeof meta>;

// Define the SearchBarAutomatic component
const SearchBarAutomatic: React.FC<SearchProps> = (args) => {
  const [searchQuery, setSearchQuery] = useState(args.options);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filteredData = args.options.filter((arrItem) => arrItem.title.toLowerCase().includes(e.target.value.toLowerCase()));
    setSearchQuery(filteredData);
  };

  return (
    <WavelengthSearch
      {...args} // Spread the args to pass all relevant props to the WavelengthSearch component
      options={searchQuery} // Filtered options
      onChange={handleOnChange}
    />
  );
};

const SearchBarManual: React.FC<SearchProps> = (args) => {
  const [searchQuery1, setSearchQuery] = useState(template);

  const handleEnter = (searchVal: string) => {
    const filteredData = args.options.filter((arrItem) => arrItem.title.toLowerCase().includes(searchVal.toLowerCase()));
    setSearchQuery(filteredData);
  };
  return <WavelengthSearch {...args} options={searchQuery1} onEnter={handleEnter} mode="manual" />;
};

const TextBox: React.FC<SearchProps> = (args) => {
  const [searchQuery, setSearchQuery] = useState(args.options);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filteredData = args.options.filter((arrItem) => arrItem.title.toLowerCase().includes(e.target.value.toLowerCase()));
    setSearchQuery(filteredData);
  };

  return (
    <WavelengthSearch
      {...args} // Spread the args to pass all relevant props to the WavelengthSearch component
      options={searchQuery} // Filtered options
      onChange={handleOnChange}
      borderRadius={5}
      size="small"
      type="text-box"
    />
  );
};
// Define the primary story for Storybook
export const WavelengthSearchAutomatic: Story = {
  args: {
    width: "400px", // You can adjust the width here
  },
  render: (args) => <SearchBarAutomatic {...args} />, // Pass args to the component
};

export const WavelengthSearchManual: Story = {
  args: {
    width: "400px", // You can adjust the width here
  },
  render: (args) => <SearchBarManual {...args} />, // Pass args to the component
};

export const WavelengthTextBox: Story = {
  args: {
    width: "400px", // You can adjust the width here
  },
  render: (args) => <TextBox {...args} />, // Pass args to the component
};
