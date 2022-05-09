import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import userflow from "userflow.js";

userflow.init("ct_2cr2apkujvh7xag4ezserzr6ey");

userflow.identify("USER_ID", {
  name: "USER_NAME2",
});

const chmln = require("@chamaeleonidae/chmln");

chmln.init(
  "S4gtYPM542SFouBLvdWCKQAioJdNtV9siNSJ7u5lB44ITy-1NLunl-DCttayvd09l0ABhd"
);

chmln.identify("someid");

function App() {
  return (
    <div className="App" style={{ height: "100vh" }}>
      <iframe
        src="http://localhost:8080?folder=/Users/idoleibovich/workspace/lightrun-code-server"
        width="100%"
        height="100%"
        title="Code server"
      />
    </div>
  );
}

export default App;
