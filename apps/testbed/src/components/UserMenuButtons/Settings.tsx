function Config(props: any) {
  const listItems = configList.map((item, id) => (
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
          <h4>Settings</h4>
          {listItems}
          <a style={{ color: "darkblue" }} href={"http://localhost:5173/"}>
            Click here for more configurations
          </a>
        </ul>
      ) : null}
    </div>
  );
}

export default Config;
export const configList = [<>No Configurations available</>];
