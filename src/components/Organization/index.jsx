import React from "react";
import styles from "./organization.module.css";
import { FaUpload, FaDownload, FaPlusSquare } from "react-icons/fa";

const Organization = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box_left}>
        <div className={styles.box}>
          <h2>Organización </h2>
        </div>
        <div className={styles.box}>
          <div style={{ color: "#3993EE" }}>Divisiones</div>
          <div style={{ color: "#A6A6A6" }}>Colaboradores</div>
        </div>
      </div>
      <div className={styles.box_right}>
        <div style={{ paddingRight: "30px" }}>
          <FaPlusSquare color="#3993EE" size={30} />
        </div>
        <div style={{ paddingRight: "30px" }}>
          <FaUpload color="#3993EE" size={30} />
        </div>
        <div>
          <FaDownload color="#3993EE" size={30} />
        </div>
      </div>
    </div>
  );
};

export default Organization;
