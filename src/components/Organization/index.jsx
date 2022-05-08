import React from "react";
import styles from "./organization.module.css";

const Organization = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box_left}>
        <div className={styles.box}>Organización</div>
        <div className={styles.box}>
          <div>Divisiones</div>
          <div>Colaboradores</div>
        </div>
      </div>
      <div className={styles.box_right}>
        <div>logo</div>
        <div>logo</div>
        <div>logo</div>
      </div>
    </div>
  );
};

export default Organization;
