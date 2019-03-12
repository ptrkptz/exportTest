import React from 'react';
import ReactDOM from 'react-dom';
import { CSVLink, CSVDownload } from "react-csv";

function getButtonText() {
  return "Download Me!";
}

//  Create a react component
const App = () => {
  return (
    <CSVLink data={data} headers={headers}>
      <button style={{ backgroundColor: "red", color: "white" }}>
        {getButtonText()}
      </button>
    </CSVLink>
  );
};

const headers = [
  { label: "First Name", key: "firstname" },
  { label: "Last Name", key: "lastname" },
  { label: "Email", key: "email" }
];

const data = [
  { firstname: "Ahmed", lastname: "Tomi", email: "ah@smthing.co.com" },
  { firstname: "Raed", lastname: "Labes", email: "rl@smthing.co.com" },
  { firstname: "Yezzi", lastname: "Min l3b", email: "ymin@cocococo.com" }
];

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
