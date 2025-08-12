// import { WavelengthTextField } from "@wavelengthusaf/components";

// import ComponentContainer from "../components/ComponentContainer/ComponentContainer";
// import CodeBlock from "../components/CodeBlock/CodeBlock";
// import Example from "../components/Example/Example";
// import { Stack } from "@mui/material";

// const imp = 'import { WavelengthTextField } from "@wavelengthusaf/components";';
// function PageTextField() {
//   return (
//     <>
//       <span className="page-name">Text Field</span>
//       <div className="contentBlock">
//         <p>
//           Wavelength Text Field is a customizable Material-UI TextField component that supports validation with a regular expression (regex). It allows developers to define styles such as border
//           color, label color, and focus color while providing real-time input validation.
//         </p>
//         <br />

//         <h2>Import Statements</h2>
//         <CodeBlock code={imp} />
//       </div>
//       <Example title="Customizing" description="Developers can use the borderColor, labelColor,focusColor, and textColor to customize the text field">
//         <Stack direction={"column"} sx={{ backgroundColor: "#081b27" }} justifyContent={"center"} alignItems={"center"} spacing={2} padding={2} border={"1px solid #214355"}>
//           <WavelengthTextField label="Label" variant="outlined" />
//           <WavelengthTextField variant="outlined" borderColor="green" label="Label" labelColor="green" focusColor="lightgreen" textColor="beige" placeholder="Input Text" />
//           <WavelengthTextField variant="outlined" borderColor="lightblue" label="Label" labelColor="lightblue" focusColor="blue" textColor="white" placeholder="Input Date" type="date" />
//         </Stack>
//         <CodeBlock
//           code='<WavelengthTextField label="Label" />
// <WavelengthTextField borderColor="green" label="Label" labelColor="green" focusColor="lightgreen" textColor="beige" placeholder="Input Text" />
// <WavelengthTextField borderColor="lightblue" label="Label" labelColor="lightblue" focusColor="blue" textColor="white" placeholder="Input Date" type="date" />'
//         />
//       </Example>

//       <Example
//         title="Validation"
//         description="Developers can use the text field validation by providing a regex function to compare the input too. If the input doesnt match,the text field will turn red."
//       >
//         <ComponentContainer backgroundColor="black">
//           <WavelengthTextField
//             variant="outlined"
//             label="Title"
//             required
//             placeholder="Add Annex Title"
//             labelColor="white"
//             focusColor="rgba(38, 186, 190, 1)"
//             regex={/^[a-zA-Z0-9]+$/}
//             onChange={(e) => console.log(e.target.value)}
//           />
//         </ComponentContainer>

//         <CodeBlock code='<WavelengthTextField label="Title" required regex={/^[a-zA-Z0-9]+$/} placeholder="Add Annex Title" labelColor="white" focusColor="rgba(38, 186, 190, 1)" onChange={(e) => console.log(e.target.value) />' />
//       </Example>
//     </>
//   );
// }

// export default PageTextField;
