import { WavelengthPopUpMenu } from "@wavelengthusaf/components";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import CodeBlock from "../components/CodeBlock/CodeBlock";
import Example from "../components/Example/Example";
import ComponentContainer from "../components/ComponentContainer/ComponentContainer";

function PagePopUpMenu() {
  const imp = `import { WavelengthPopUpMenu } from '@wavelengthusaf/components';`;
  const testItems = [
    { itemType: "header", label: "Help & Support", link: "/common-components/", end: true },
    { itemType: "footer", label: "Contact Us:" },
    { itemType: "footer", label: "210-953-0564" },
    { label: "Random Company Wellness", link: "PopUpMenu", itemType: "link" },
    { itemType: "footer", email: "mailto:awesomehelp563EWS@orgbox.mil", label: "awesomehelp563EWS@orgbox.mil" },
  ];
  return (
    <>
      <span className="page-name">Pop Up Menu</span>
      <div className="contentBlock">
        <br />
        <h2>Table of Contents</h2>

        <h2>Import Statement</h2>
        <CodeBlock code={imp} />
      </div>
      <h2 id="menuItemProps" className="targets">
        menuItemProps Interface
      </h2>
      <CodeBlock
        code={`export interface menuItemProps {
  itemtype: "header" | "link" | "footer" | string;
  label: string | number;
  link?: string;
  end?: boolean;
  email?: string;
  hoverColor?:string;
}
const testItems = [
    { itemType: 'header', label: 'Help & Support', link: '/', end: true },
    { itemType: 'footer', label: 'Contact Us:' },
    { itemType: 'footer', label: '210-953-0564' },
    { itemType: 'footer', email: 'mailto:awesomehelp563EWS@orgbox.mil', label: 'awesomehelp563EWS@orgbox.mil' },
   
  ];`}
      />
      <ul>
        <div>
          <li>
            <span style={{ fontWeight: "bold" }}>itemType</span>: is based on the menuItem type: header is the top of the menu and also bolded, link signifies a link (must have link), footer is for
            the bottom of the menu (All types can be links)
          </li>
        </div>
        <div>
          <li>
            <span style={{ fontWeight: "bold" }}>label</span>: The text that displays the menuItem
          </li>
        </div>
        <div>
          <li>
            <span style={{ fontWeight: "bold" }}>link</span>: The route / href the user goes to when this menuItem is clicked{" "}
          </li>
        </div>
        <div>
          <li>
            <span style={{ fontWeight: "bold" }}>end</span>: If true, a Divider is placed at the end of this menuItem
          </li>
        </div>
        <div>
          <li>
            <span style={{ fontWeight: "bold" }}>email?</span>: Must be used with footer itemtype, creates a link that opens up an email window
          </li>
        </div>
        <div>
          <li>
            <span style={{ fontWeight: "bold" }}>hoverColor?</span>: This is the color of the text inside a list item when hovered
          </li>
        </div>
      </ul>
      <br />
      <h2>Props</h2>
      <div id="menuItems" className="targets"></div>
      <div className="demoContainer">
        <Example title="menuItems" description="The options that the menu will display, must conform to the menuItemProps interface.">
          <ComponentContainer>
            <WavelengthPopUpMenu menuItems={testItems} color="white" />
          </ComponentContainer>

          <CodeBlock code={`<WavelengthPopUpMenu menuItems={testItems} color="white" />`} />
        </Example>
        <Example title="color" description="The color of the icon. The default color is black.">
          <ComponentContainer>
            <WavelengthPopUpMenu menuItems={testItems} color="red" />
          </ComponentContainer>

          <CodeBlock code={`<WavelengthPopUpMenu menuItems={testItems} color="red" />`} />
        </Example>
        <div id="customIcon" className="targets">
          <Example title="customIcon" description="The customIcon Prop enables you to choose your own Icon for the menu prop button.">
            <ComponentContainer>
              <WavelengthPopUpMenu menuItems={testItems} customIcon={<ContactSupportIcon color="primary" />} />
            </ComponentContainer>
            <CodeBlock code={`<WavelengthPopUpMenu menuItems={testItems} customIcon={<ContactSupportIcon color="primary" />} />`} />
          </Example>
        </div>
        <div className="targets">
          <Example title="Changing hover color of links or menu items" description="the color of the email text when hovered, the default hover color is blue. ">
            <ComponentContainer>
              <WavelengthPopUpMenu
                menuItems={[
                  { itemType: "header", label: "Help & Support", link: "/common-components/", end: true },
                  { itemType: "footer", label: "Contact Us:" },
                  { itemType: "footer", label: "210-953-0564" },
                  { label: "Random Company Wellness", link: "PopUpMenu", itemType: "link", hoverColor: "blue" },
                  { itemType: "footer", email: "mailto:awesomehelp563EWS@orgbox.mil", label: "awesomehelp563EWS@orgbox.mil", hoverColor: "green" },
                ]}
                color="white"
              />
            </ComponentContainer>
            <CodeBlock
              code='<WavelengthPopUpMenu
  menuItems={[
  { itemType: "header", label: "Help & Support", link: "/common-components/", end: true },
  { itemType: "footer", label: "Contact Us:" },
  { itemType: "footer", label: "210-953-0564" },
  { label: "Random Company Wellness", link: "PopUpMenu", itemType: "link", hoverColor: "blue" },
  { itemType: "footer", email: "mailto:awesomehelp563EWS@orgbox.mil", label: "awesomehelp563EWS@orgbox.mil", hoverColor: "green" },
   ]}
   color="white"
              />'
            />
          </Example>
        </div>
        <div id="menuDirection" className="targets">
          <Example
            title="menuDirection"
            description="The menuDirection Prop enables you to chose which direction the menu goes relative to the menu button. Can either be top or bottom, the default is top."
          >
            <ComponentContainer>
              <WavelengthPopUpMenu menuItems={testItems} menuDirection="bottom" customIcon={<ContactSupportIcon color="primary" />} />
            </ComponentContainer>
            <CodeBlock code={`<WavelengthPopUpMenu menuItems={testItems} menuDirection="bottom" customIcon={<ContactSupportIcon color="primary" />}/>`} />
          </Example>
        </div>
      </div>
      <br />
      <h2>Examples</h2>
      <div id="Example: Help Menu" className="targets"></div>
      <div className="demoContainer">
        <Example title="Help Menu" description="Help Menu to attach to footer.">
          <ComponentContainer>
            <WavelengthPopUpMenu
              color="white"
              menuItems={[
                { itemType: "header", label: "Help & Support", link: "/common-components/", end: true },
                { itemType: "footer", label: "Contact Us:" },
                { itemType: "footer", email: "awesomehelp563EWS@orgbox.mil", label: "awesomehelp563EWS@orgbox.mil" },
              ]}
            />
          </ComponentContainer>

          <CodeBlock
            code={`<WavelengthPopUpMenu
      color="white"
      menuItems={[
      { itemType: 'header', label: 'Help & Support', link: '/', end: true },
      { itemType: 'footer', label: 'Contact Us:' },
      { itemType: 'footer', email: 'awesomehelp563EWS@orgbox.mil', label: 'awesomehelp563EWS@orgbox.mil' },
      ]}
      />`}
          />
        </Example>
        <div id="Example: Menu with just Links" className="targets">
          <Example title="Menu with just links" description="Here is an example of a menu with just links and dividers (Referenced HEB's Website).">
            <ComponentContainer>
              <WavelengthPopUpMenu
                menuItems={[
                  { label: "Random Company Wellness", link: "PopUpMenu", itemType: "link", hoverColor: "orange" },
                  { label: "Primary Care", link: "PopUpMenu", itemType: "link", hoverColor: "orange" },
                  { label: "Nutrition Services", link: "PopUpMenu", itemType: "link", hoverColor: "orange" },
                  { label: "Inspired Meal Planning", link: "PopUpMenu", itemType: "link", end: true, hoverColor: "orange" },
                  { label: "Business Services", link: "PopUpMenu", itemType: "link", hoverColor: "orange" },
                ]}
                menuDirection="top"
                border="1px solid orange"
                customIcon={<ContactSupportIcon color="warning" />}
              />
            </ComponentContainer>
            <CodeBlock
              code={`<WavelengthPopUpMenu
    menuItems={[
      { label: "Random Company Wellness", link: "PopUpMenu", itemType: "link", hoverColor: "orange" },
      { label: "Primary Care", link: "PopUpMenu", itemType: "link", hoverColor: "orange" },
      { label: "Nutrition Services", link: "PopUpMenu", itemType: "link", hoverColor: "orange" },
      { label: "Inspired Meal Planning", link: "PopUpMenu", itemType: "link", end: true, hoverColor: "orange" },
      { label: "Business Services", link: "PopUpMenu", itemType: "link", hoverColor: "orange" },
    ]}
    menuDirection="top"
    border="1px solid orange"
    customIcon={<ContactSupportIcon color="warning" />}
              />`}
            />
          </Example>
        </div>
      </div>
    </>
  );
}

export default PagePopUpMenu;
