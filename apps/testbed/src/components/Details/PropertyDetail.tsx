interface PropertyDetailProps {
  name: string;
  dataType: string;
  description: string;
  notes: string;
}

export function PropertyDetail({ dataType, description, notes }: PropertyDetailProps) {
  return (
    <>
      {/* <h5>{name}</h5> */}
      <p>
        <u>Data Type(s)</u>: {dataType}
      </p>
      <p>
        <u>Description</u>: {description}
      </p>
      <p>
        <u>Notes</u>: {notes}
      </p>
    </>
  );
}

export default PropertyDetail;
