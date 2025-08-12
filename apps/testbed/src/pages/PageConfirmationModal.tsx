import CodeBlock from "../components/CodeBlock/CodeBlock";

import { WavelengthStyledButton } from "@wavelengthusaf/components";
import Example from "../components/Example/Example";
import { WavelengthConfirmationModal } from "@wavelengthusaf/components";
import { useState } from "react";
import ComponentContainer from "../components/ComponentContainer/ComponentContainer";

function PageConfirmationModal() {
  const snippet1 = `//Modal Hook
const [confirmationModal, setConfirmationModal] = useState<boolean>(false);`;

  const snippet2 = `// This is a default function that is used for the handleConfirmationModalOnConfirmProp (i.e. the 'Yes, Continue' Button in the model)
// Change or update this function to add your own functionality to the 'Yes, Continue' button
function closeModal(): void {
    setConfirmationModal(false);
}`;
  const snippet3 = ` <WavelengthConfirmationModal
  show={confirmationModal}
  setShow={setConfirmationModal}
  width="451px"
  height="256px"
  backgroundColor="rgb(230, 232, 236)"
  textObj={{
    purpose: "Continue",
    title: "Confirm Submission",
    dialog: "Let us help apps determine location. This means sending anonymous location data to us, even when no apps are running.",
  }}
  cancelButton={
    <WavelengthStyledButton type="ewdms_secondary" styles={{ width: "105px" }} onClick={closeModal}>
      Cancel
    </WavelengthStyledButton>
  }
  submitButton={
    <WavelengthStyledButton type="ewdms_primary" styles={{ width: "109px", backgroundColor: "rgba(26, 128, 131, 0.1)" }}>
      Submit
    </WavelengthStyledButton>
  }
        />`;

  const imp = `import { WavelengthConfirmationModal } from '@wavelengthusaf/components';`;

  const [confirmationModal, setConfirmationModal] = useState<boolean>(false);

  // This is a default function that is used for the handleWavelengthConfirmationModalOnConfirmProp (i.e. the 'Yes, Continue' Button in the model)
  // Change or update this function to add your own functionality to the 'Yes, Continue' button
  function closeModal(): void {
    setConfirmationModal(false);
  }

  return (
    <>
      <span className="page-name">Confirmation Modal</span>
      <p>A pop-up that displays over the page when an action is taken; used for confirming or canceling</p>
      <br />
      <h2>Import Statement</h2>
      <CodeBlock code={imp} />

      <Example
        title="WavelengthConfirmationModal"
        description="The textobj prop contains the contents of the text contents of the confirmation modal. Users must provide their own 2 buttons (cancel, and submit)"
      >
        <WavelengthConfirmationModal
          show={confirmationModal}
          setShow={setConfirmationModal}
          width="451px"
          height="256px"
          backgroundColor="rgb(230, 232, 236)"
          textObj={{
            purpose: "Continue",
            title: "Confirm Submission",
            dialog: "Please confirm if you would like to continue with this action. This action is irreversible, and we want to make sure you're absolutely certain before proceeding.",
          }}
          cancelButton={
            <WavelengthStyledButton type="ewdms_secondary" styles={{ width: "105px" }} onClick={closeModal}>
              Cancel
            </WavelengthStyledButton>
          }
          submitButton={
            <WavelengthStyledButton type="ewdms_primary" styles={{ width: "109px", backgroundColor: "rgba(26, 128, 131, 0.1)" }}>
              Submit
            </WavelengthStyledButton>
          }
        />
        <ComponentContainer>
          <WavelengthStyledButton type="default" hoverstyles={{ border: "1px solid blue" }} onClick={() => setConfirmationModal(true)}>
            Click for modal
          </WavelengthStyledButton>
        </ComponentContainer>

        <CodeBlock code={snippet1 + "\n\n/*Modal Placeholder Function */ \n" + snippet2 + "\n\n/* Wavelength Modal*/ \n" + snippet3} />
      </Example>
    </>
  );
}

export default PageConfirmationModal;
