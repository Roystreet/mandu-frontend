import React from "react";
import styles from "./searchbar.module.css";
import { Select, Input } from "antd";
const { Option } = Select;
const { Search } = Input;

const SearchBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container}>
        <div
          style={{
            border: "1px solid  #378FEE",
            color: "#378FEE",
            background: "#EEF3FA",
          }}
        >
          Listado
        </div>
        <div>Arbol</div>
      </div>
      <div>
        <Select placeholder="Columnas" style={{ width: 120 }}>
          <Option value="Division">Division</Option>
          <Option value="Division Superior">Division Superior</Option>
          <Option value="Colaboradores">Colaboradores</Option>
          <Option value="Nivel">Nivel</Option>
          <Option value="Subdivisiones">Subdivisiones</Option>
          <Option value="Embajadores">Embajadores</Option>
        </Select>
        <Search style={{ width: 200 }}></Search>
      </div>
    </div>
  );
};

export default SearchBar;
