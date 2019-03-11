import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText() {
  return "Button Text";
}

//  Create a react component
const App = () => {
  return (
    <div>
      <label class="labelName" for="name">
        Enter name:{" "}
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {getButtonText()}
      </button>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
