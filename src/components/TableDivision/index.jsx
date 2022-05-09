import React from "react";
import { Table } from "antd";
import styles from "./tabledivision.module.css";
import SearchBar from "../SearchBar";

export default function TableDivision({
  data,
  isLoading,
  onChangeSearch,
  onChangeSelect,
}) {
  const filterDivision = data.map((data) => {
    return {
      text: data.Division,
      value: data.Division,
    };
  });
  const filterPivoteDivisionSuperior = new Set(
    data.map((data) => data.DivisionSuperior)
  );
  const filterDivisionSuperior = [...filterPivoteDivisionSuperior].map(
    (data) => {
      return {
        text: data,
        value: data,
      };
    }
  );
  const filterPivoteLevel = new Set(data.map((data) => data.Nivel));
  const filterLevel = [...filterPivoteLevel].map((data) => {
    return {
      text: data,
      value: data,
    };
  });

  const columns = [
    {
      title: "Division",
      dataIndex: "Division",
      key: "Division",
      sorter: (a, b) => a.Division.length - b.Division.length,
      sortDirections: ["descend", "ascend"],
      filters: filterDivision,
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value, record) => record.Division.startsWith(value),
    },
    {
      title: "Division superior",
      dataIndex: "DivisionSuperior",
      key: "DivisionSuperior",
      sorter: (a, b) => a.Division.length - b.Division.length,
      sortDirections: ["descend", "ascend"],
      filters: filterDivisionSuperior,
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value, record) => record.DivisionSuperior.startsWith(value),
    },
    {
      title: "Colaboradores",
      dataIndex: "Colaboradores",
      key: "Colaboradores",
      sorter: (a, b) => a.Colaboradores - b.Colaboradores,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Nivel",
      dataIndex: "Nivel",
      key: "Nivel",
      sorter: (a, b) => a.Nivel - b.Nivel,
      sortDirections: ["descend", "ascend"],
      filters: filterLevel,
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value, record) => record.Nivel.includes(value),
    },
    {
      title: "Subdivisiones",
      dataIndex: "Subdivisiones",
      key: "Subdivisiones",
      sorter: (a, b) => a.Subdivisiones - b.Subdivisiones,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Embajadores",
      dataIndex: "Embajadores",
      key: "Embajadores",
    },
  ];

  const datos = data;

  return (
    <div className={styles.container}>
      <SearchBar
        onChangeSearch={onChangeSearch}
        onChangeSelect={onChangeSelect}
      />
      <Table
        rowSelection="checkbox"
        columns={columns}
        dataSource={datos}
        pagination={{ defaultPageSize: 10, showSizeChanger: true }}
        bordered
        loading={isLoading}
      />
    </div>
  );
}
