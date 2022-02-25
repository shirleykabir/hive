import "./App.css";
import Select from "./Select";
import React, { Component } from "react";

const names = ["Oliver Hansen", "Van Henry", "April Tucker", "Ralph Hubbard"];

const ages = ["None", "Twenty", "Twenty one", "Twenty one and a half"];

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <Select
          label="Tag"
          id="takehome-1"
          multiple
          style={{
            width: 250,
            color: "purple",
          }}
          data={names}
        />

        <Select
          label="Age"
          id="takehome-2"
          style={{
            width: 175,
            color: "green",
          }}
          data={ages}
        />
      </div>
    );
  }
}
export default App;
