function Notifications(props: any) {
  const listItems = notificationList.map((item, id) => (
    <li key={id}>
      <div style={{ border: "1px solid black", borderRadius: "5px", backgroundColor: "#F5F5F5", margin: "5px" }}>{item}</div>
    </li>
  ));

  let borderStatus: any;
  if (props.isVisible) {
    borderStatus = "solid";
  }

  function clearList() {
    notificationList = [];
  }

  return (
    <div style={{ width: "300px", backgroundColor: "#4287F5", borderStyle: borderStatus, borderRadius: "13px" }}>
      {props.isVisible ? (
        <ul>
          <h4>Alerts</h4>
          {listItems}
          <button onClick={() => clearList()}>Clear All</button>
        </ul>
      ) : null}
    </div>
  );
}

export default Notifications;
export let notificationList = [
  <div key={"href"}>
    <a href="http://localhost:5173/">Alert 1</a>, <>Alert 2</>, <>Alert 3</>
  </div>,
];
