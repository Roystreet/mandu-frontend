import "normalize.css";
import "antd/dist/antd.css";
import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Organization from "./components/Organization";
import TableDivision from "./components/TableDivision";
import { getDivisions } from "./services";

function App() {
  const [divisions, setDivisions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState([]);
  const [select, setSelect] = useState("Division");

  const onChangeSearch = (e) => {
    if (e.target.value.length > 0) {
      const search = divisions.filter((data) =>
        data[select].toLowerCase().startsWith(e.target.value.toLowerCase())
      );
      setFilter(search);
    } else {
      setFilter(divisions);
    }
  };

  const onChangeSelect = (value) => {
    setSelect(value);
  };

  useEffect(() => {
    getDivisions().then((data) => {
      setDivisions(data);
      setFilter(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Organization />
      <TableDivision
        data={filter}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        onChangeSearch={onChangeSearch}
        onChangeSelect={onChangeSelect}
      />
    </div>
  );
}

export default App;
