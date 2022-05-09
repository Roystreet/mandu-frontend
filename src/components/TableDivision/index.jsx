import React from "react";
import { Table } from "antd";
import styles from "./tabledivision.module.css";
import SearchBar from "../SearchBar";

export default function TableDivision({ data, isLoading }) {
  const columns = [
    {
      title: "Division",
      dataIndex: "Division",
      key: "Division",
      sorter: (a, b) => a.Division.length - b.Division.length,
      sortDirections: ["descend", "ascend"],
      filters: [{ text: "Division 1", value: "Division 1" }],
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
      filters: [{ text: "Division 1", value: "Division 1" }],
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
      filters: [
        { text: "10", value: 10 },
        { text: "2", value: 2 },
      ],
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value, record) => record.Colaboradores.startsWith(value),
    },
    {
      title: "Nivel",
      dataIndex: "Nivel",
      key: "Nivel",
      sorter: (a, b) => a.Nivel - b.Nivel,
      sortDirections: ["descend", "ascend"],
      filters: [
        { text: "10", value: "10" },
        { text: "2", value: 2 },
      ],
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value, record) => record.Nivel.includes(value),
    },
    {
      title: "Subdivisiones",
      dataIndex: "Subdivisiones",
      key: "Subdivisiones",
      sorter: (a, b) => b.Subdivisiones - a.Subdivisiones,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Embajadores",
      dataIndex: "Embajadores",
      key: "Embajadores",
    },
  ];

  const dataa = [
    {
      key: "1",
      Division: "Zivision 1",
      DivisionSuperior: "Division 1",
      Colaboradores: 10,
      Nivel: "2",
      Subdivisiones: 7,
      Embajadores: "el pepe",
    },
    {
      key: "2",
      Division: "Division 1",
      DivisionSuperior: "Division 1",
      Colaboradores: "10",
      Nivel: "2",
      Subdivisiones: 2,
      Embajadores: "el pepe",
    },
    {
      key: "3",
      Division: "Division 1",
      DivisionSuperior: "Division 1",
      Colaboradores: 10,
      Nivel: "2",
      Subdivisiones: 2,
      Embajadores: "el pepe",
    },
    {
      key: "4",
      Division: "Division 1",
      DivisionSuperior: "Division 1",
      Colaboradores: 10,
      Nivel: "2",
      Subdivisiones: 6,
      Embajadores: "el pepe",
    },
    {
      key: "5",
      Division: "Division 1",
      DivisionSuperior: "Division 1",
      Colaboradores: 10,
      Nivel: "2",
      Subdivisiones: 2,
      Embajadores: "el pepe",
    },
    {
      key: "6",
      Division: "Division 1",
      DivisionSuperior: "Division 1",
      Colaboradores: 10,
      Nivel: "2",
      Subdivisiones: 2,
      Embajadores: "el pepe",
    },
    {
      key: "7",
      Division: "Division 1",
      DivisionSuperior: "Division 1",
      Colaboradores: 10,
      Nivel: "2",
      Subdivisiones: 2,
      Embajadores: "el pepe",
    },
    {
      key: "8",
      Division: "Division 1",
      DivisionSuperior: "Division 1",
      Colaboradores: 10,
      Nivel: "2",
      Subdivisiones: 10,
      Embajadores: "el pepe",
    },
    {
      key: "9",
      Division: "Division 1",
      DivisionSuperior: "Division 1",
      Colaboradores: 10,
      Nivel: "2",
      Subdivisiones: 10,
      Embajadores: "el pepe",
    },
    {
      key: "10",
      Division: "Division 1",
      DivisionSuperior: "Division 1",
      Colaboradores: 10,
      Nivel: "2",
      Subdivisiones: 10,
      Embajadores: "el pepe",
    },
    {
      key: "11",
      Division: "Division 1",
      DivisionSuperior: "Division 1",
      Colaboradores: 10,
      Nivel: "2",
      Subdivisiones: 10,
      Embajadores: "el pepe",
    },
    {
      key: "12",
      Division: "Division 1",
      DivisionSuperior: "Division 1",
      Colaboradores: 10,
      Nivel: "2",
      Subdivisiones: 10,
      Embajadores: "el pepe",
    },
    {
      key: "13",
      Division: "Division 1",
      DivisionSuperior: "Division 1",
      Colaboradores: 10,
      Nivel: "2",
      Subdivisiones: 10,
      Embajadores: "el pepe",
    },
    {
      key: "14",
      Division: "Division 1",
      DivisionSuperior: "Division 1",
      Colaboradores: 10,
      Nivel: "2",
      Subdivisiones: 10,
      Embajadores: "el pepe",
    },
    {
      key: "15",
      Division: "Division 1",
      DivisionSuperior: "Division 1",
      Colaboradores: 10,
      Nivel: "2",
      Subdivisiones: 10,
      Embajadores: "el pepe",
    },
    {
      key: "16",
      Division: "Division 1",
      DivisionSuperior: "Division 1",
      Colaboradores: 10,
      Nivel: "10",
      Subdivisiones: 10,
      Embajadores: "el pepe",
    },
  ];
  const datos = data;

  return (
    <div className={styles.container}>
      <SearchBar />
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
