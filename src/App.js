import "normalize.css";
import "antd/dist/antd.css";
import React from "react";
import NavBar from "./components/NavBar";
import Organization from "./components/Organization";
import TableDivision from "./components/Table";
import { Divider } from "antd";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Organization />
      <TableDivision />
    </div>
  );
}

export default App;
