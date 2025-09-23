import { WavelengthForm } from "@wavelengthusaf/components";
import z from "zod";

const sampleSchema = z.object({
  firstName: z.string().min(1, "Required"),
  lastName: z.string().min(1, "Required"),
});

function PageTextField() {
  return (
    <>
      <WavelengthForm schema={sampleSchema} />
    </>
  );
}

export default PageTextField;
