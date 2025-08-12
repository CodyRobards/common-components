import ComponentContainer from "../components/ComponentContainer/ComponentContainer";
import CodeBlock from "../components/CodeBlock/CodeBlock";
import Example from "../components/Example/Example";
import { WavelengthSideBar } from "@wavelengthusaf/components";

function PageSideBar() {
  const snippet1 = `<WavelengthSideBar sections={section1} />`;
  const snippet2 = `<WavelengthSideBar
  sections={section1}
  bgColor="hotpink"
  txtColor="yellow"
  labelColor="black"
  arrowColor="blue"
/>`;

  const snippet3 = `<WavelengthSideBar sections={section1} marginLeft="150px" marginTop="75px" width="400px" />`;

  const imp = `import { WavelengthSidebar } from '@wavelengthusaf/components';`;

  const sampleArray1 = `// This is the basic structure of a standard object array that is required to get the sidebar to function.
// There are several sub-props that belong to three interfaces, Section, SubSection & SubSectionItem worth taking note of:

// Section
  // title: Used for naming the dropdowns.
  // subsections?: a SubSections array. This is used to create the items, as well as the labels, under the dropdown it's nested in.

// SubSection
  // title?: Used to create the labels to better organize the items under the dropdown.
  // items?: a SubSectionsItem array. This is used to create items with no label, as well as the labels, under the dropdown it's nested in.

// SubSectionItem
  // title?: Used to create the items under a specific label.
  // path?: Used to make a given item navigate to a specific route.
  // onClick?: Arrow function used to make a given item have a click function.

const section1 = [
  {
    title: 'Produce', // Dropdown w/ items
    subsections: [
      {
        title: 'Fruit', // Label used to visually organize items below
        items: [
          { title: 'Apple (path? test)', path: '/SearchBar' }, // Item w/ route
          {
            title: 'Orange (onClick? test)', // Item w/ onClick function
            onClick: () => {
              alert('Oranges are delicious!');
            },
          },
          { title: 'Banana' },
        ],
      },
      {
        title: 'Vegetable',
        items: [{ title: 'Carrot' }, { title: 'Lettuce' }, { title: 'Tomato' }],
      },
    ],
  },
  {
    title: 'Meat',
    subsections: [
      {
        title: 'Beef',
        items: [{ title: 'Ground Beef' }, { title: 'Ribeye' }, { title: 'Chicken Fried Steak' }],
      },
      {
        title: 'Chicken',
        items: [{ title: 'Roasted Chicken' }, { title: 'Fried Chicken' }, { title: 'Chicken Noodle Soup' }],
      },
    ],
  },
];`;

  const section1 = [
    {
      title: "Produce", // Dropdown w/ items
      subsections: [
        {
          title: "Fruit", // Label used to visually organize items below
          items: [
            { title: "Apple (path? test)", path: "/SearchBar" }, // Item w/ route
            {
              title: "Orange (onClick? test)", // Item w/ onClick function
              onClick: () => {
                alert("Oranges are delicious!");
              },
            },
            { title: "Banana" },
          ],
        },
        {
          title: "Vegetable",
          items: [{ title: "Carrot" }, { title: "Lettuce" }, { title: "Tomato" }],
        },
      ],
    },
    {
      title: "Meat",
      subsections: [
        {
          title: "Beef",
          items: [{ title: "Ground Beef" }, { title: "Ribeye" }, { title: "Chicken Fried Steak" }],
        },
        {
          title: "Chicken",
          items: [{ title: "Roasted Chicken" }, { title: "Fried Chicken" }, { title: "Chicken Noodle Soup" }],
        },
      ],
    },
  ];

  return (
    <>
      <span className="page-name">Side Bar</span>
      <p>A side bar with items; typically used for organizing pages/routes. Can also be used as a click function.</p>
      <br />
      <h2>Import Statement</h2>
      <CodeBlock code={imp} />
      <h2>sections</h2>
      <p> What makes all of the drop-downs and items to render. This will require an object array with given values as the input. Read the comments within the codeblock below for further guidance.</p>
      <ComponentContainer>
        <div>
          <WavelengthSideBar sections={section1} />
        </div>
      </ComponentContainer>
      <CodeBlock code={sampleArray1} />

      <CodeBlock code={snippet1} />
      <Example title="bgColor?, txtColor?, labelColor? & arrowColor?" description="Controls the color of the various visual aspects of the sidebar.">
        <ComponentContainer>
          <div>
            <WavelengthSideBar sections={section1} bgColor="hotpink" txtColor="yellow" labelColor="black" arrowColor="blue" />
          </div>
        </ComponentContainer>
        <CodeBlock code={snippet2} />
      </Example>
      <Example title="marginTop?, marginLeft? & width?" description="Controls the margins and width of the sidebar.">
        <ComponentContainer>
          <div>
            <WavelengthSideBar sections={section1} marginLeft="125px" marginTop="75px" width="400px" />
          </div>
        </ComponentContainer>
        <CodeBlock code={snippet3} />
      </Example>
    </>
  );
}

export default PageSideBar;
