import CodeBlock from "../components/CodeBlock/CodeBlock";
import Demo from "../components/Demo/Demo";
import { WavelengthButton } from "@wavelengthusaf/components";
import Example from "../components/Example/Example";
import { WavelengthContentModal } from "@wavelengthusaf/components";
import { useState } from "react";

export function PageContentModal() {
  const snippet1 = `const [contentModal, setContentModal] = useState<boolean>(false);`;

  const snippet2 = `// This is a default function that is used for the handleContentModalOnConfirmProp (i.e. the 'Yes, Continue' Button in the model)
// Change or update this function to add your own functionality to the 'Yes, Continue' button
//
function closeModal(): void {
    setContentModal(false);
}`;
  const snippet3 = `<WavelengthContentModal
  show={WavelengthContentModal}
  setShow={setWavelengthContentModal}
  textObj={{
    purpose: 'Continue',
    title: 'Content Modal Title',
    dialog:
      'This is the text that makes up the Content Modal dialog! Would you like to close the modal?',
  }}
  handleContentModalOnConfirmProp={closeModal}
 />`;

  const imp = `import { WavelengthContentModal } from '@wavelengthusaf/components';`;

  const [contentModal, setContentModal] = useState<boolean>(false);

  // This is a default function that is used for the handleWavelengthContentModalOnConfirmProp (i.e. the 'Yes, Continue' Button in the model)
  // Change or update this function to add your own functionality to the 'Yes, Continue' button
  function closeModal(): void {
    setContentModal(false);
  }

  return (
    <>
      <span className="page-name">Content Modal</span>
      <p>A pop-up that displays over the page when an action is taken. Typically used as a Content modal.</p>
      <br />
      <h2>Import Statement</h2>
      <CodeBlock code={imp} />

      <Demo>
        <Example
          title="WavelengthContentModal"
          description="This includes three separate code blocks: The hook, the function that the Content button inside the modal uses, and the modal code tag itself."
        >
          <WavelengthContentModal
            show={contentModal}
            setShow={setContentModal}
            textObj={{
              purpose: "Continue",
              title: "Content Modal Title",
              dialog: "This is the text that makes up the Content Modal dialog! Would you like to close the modal?",
            }}
            handleContentModalOnConfirmProp={closeModal}
          />
          <WavelengthButton
            variant={"contained"}
            onClick={() => {
              setContentModal(true);
            }}
          >
            CLICK HERE FOR MODAL
          </WavelengthButton>
          <br />
          <br />
          <p>
            <i>Modal Hook</i>
          </p>
          <CodeBlock code={snippet1} />
          <p>
            <i>Modal Placeholder Function</i>
          </p>
          <CodeBlock code={snippet2} />
          <p>
            <i>Modal</i>
          </p>
          <CodeBlock code={snippet3} />
        </Example>
      </Demo>
    </>
  );
}

export default PageContentModal;
