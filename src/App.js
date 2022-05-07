import "normalize.css";
import React from "react";
import NavBar from "./components/NavBar";
import Organization from "./components/Organization";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Organization />
      <SearchBar></SearchBar>
    </div>
  );
}

export default App;
