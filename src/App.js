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
  const [search, setSearch] = useState("");

  useEffect(() => {
    getDivisions().then((data) => {
      setDivisions(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Organization />
      <TableDivision
        data={divisions}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    </div>
  );
}

export default App;
