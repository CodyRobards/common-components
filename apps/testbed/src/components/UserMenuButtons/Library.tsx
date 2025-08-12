function Library(props: any) {
  const listItems = libraryList.map((item, id) => (
    <li key={id}>
      <div style={{ border: "1px solid black", margin: "5px" }}>{item}</div>
    </li>
  ));

  let borderStatus: any;
  if (props.isVisible) {
    borderStatus = "solid";
  }

  return (
    <div style={{ width: "300px", backgroundColor: "#4287F5", borderStyle: borderStatus, borderRadius: "13px" }}>
      {props.isVisible ? (
        <ul>
          <h4>Library</h4>
          {listItems}
        </ul>
      ) : null}
    </div>
  );
}

export default Library;
export const libraryList = [<>Nothing to display</>];
