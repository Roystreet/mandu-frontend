import React from "react";
import styles from "./navbar.module.css";
import { FaBell, FaQuestionCircle, FaToolbox } from "react-icons/fa";

export const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div>
          <span style={{ fontWeight: "bold" }}> Mandu </span>
        </div>
        <div>Dashboard</div>
        <div>Organization</div>
        <div>Modelos</div>
        <div>Seguimiento</div>
      </div>
      <div className={styles.box}>
        <div>
          <FaToolbox size={25} color="white" />
        </div>
        <div>
          <FaQuestionCircle size={25} color="white" />
        </div>
        <div>
          <FaBell size={25} color="white" />
        </div>
        <div> image</div>
        <div>Adminsitrador</div>
        <div> Mandu</div>
      </div>
    </div>
  );
};

export default Navbar;
