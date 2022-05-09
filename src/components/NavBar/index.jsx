import React from "react";
import styles from "./navbar.module.css";
import mandu from "../../assets/mandu.png";
import mandu2 from "../../assets/mandu2.png";
import { FaBell, FaQuestionCircle, FaToolbox } from "react-icons/fa";

export const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div>
          <span style={{ fontWeight: "bold" }}>
            <img src={mandu} alt="mandu2" />
          </span>
        </div>
        <div>Dashboard</div>
        <div>Organization</div>
        <div>Modelos ▾</div>
        <div>Seguimiento ▾</div>
      </div>
      <div className={styles.box}>
        <div>
          <FaToolbox size={22} color="white" />
        </div>
        <div>
          <FaQuestionCircle size={22} color="white" />
        </div>
        <div>
          <FaBell size={22} color="white" />
        </div>
        <div className={styles.img_circle}>
          <div>A</div>
        </div>
        <div>Adminsitrador</div>
        <div className={styles.mandu}>
          <img src={mandu2} alt="mandu" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
