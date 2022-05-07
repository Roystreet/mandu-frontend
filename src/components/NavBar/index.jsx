import React from "react";
import styles from "./navbar.module.css";
import { FaBell, FaQuestionCircle, FaToolbox } from "react-icons/fa";

export const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div>Mandu</div>
        <div>Dashboard</div>
        <div>Organization</div>
        <div>Modelos</div>
        <div>Seguimiento</div>
      </div>
      <div className={styles.box}>
        <FaToolbox size={25} color="white" />
        <FaQuestionCircle size={25} color="white" />
        <FaBell size={25} color="white" />
        <div> image</div>
        <div>Adminsitrador</div>
        <div> Mandu</div>
      </div>
    </div>
  );
};

export default Navbar;
