import React from "react";
import styles from "./searchbar.module.css";
import { Select, Input } from "antd";
const { Option } = Select;
const { Search } = Input;

const SearchBar = ({ onChangeSearch, onChangeSelect }) => {
  return (
    <div className={styles.container}>
      <div className={styles.container}>
        <div className={styles.box_active}>Listado</div>
        <div className={styles.box_disabled}>Arbol</div>
      </div>
      <div className={styles.container_search}>
        <Select
          placeholder="Columnas"
          style={{ width: 120 }}
          onChange={onChangeSelect}
        >
          <Option value="Division">Division</Option>
          <Option value="DivisionSuperior">Division Superior</Option>
          <Option value="Colaboradores">Colaboradores</Option>
          <Option value="Nivel">Nivel</Option>
          <Option value="Subdivisiones">Subdivisiones</Option>
          <Option value="Embajadores">Embajadores</Option>
        </Select>
        <Search
          style={{ width: 300 }}
          onChange={onChangeSearch}
          className={styles.box}
        ></Search>
      </div>
    </div>
  );
};

export default SearchBar;
