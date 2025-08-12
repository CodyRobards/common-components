import { ReactNode } from "react";

interface ExampleProps {
  title?: string;
  description?: string;
  children: ReactNode;
}

export function Example({ title = "UNTITLED", description = "Description", children }: ExampleProps) {
  return (
    <>
      <h2>{<code>{title}</code>}</h2>
      {/* <p style={{ margin: "0px", maxWidth: "95%" }}>{description}</p> */}
      {description}
      <br />
      <br />
      {children}
    </>
  );
}

export default Example;
