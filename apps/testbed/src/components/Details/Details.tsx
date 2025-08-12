import { ReactNode } from "react";

interface DetailsProps {
  children: ReactNode;
}

export function Details({ children }: DetailsProps) {
  return (
    <>
      <h3>
        <u>Component Properties</u>
      </h3>
      {children}
    </>
  );
}

export default Details;
