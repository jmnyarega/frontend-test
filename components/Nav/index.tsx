import React from "react";
import styles from "./index.module.css";

function Nav({}) {
  return (
    <div className={styles.nav}>
      {/* Make separate component */}
      <div className="search">
        <button className={styles.button}>
          <i className="fa fa-search"></i>
        </button>
      </div>
      {/* Make separate component */}
      <div className="cart">
        <button className={styles.button}>
          <i className="fa fa-shopping-cart"></i>
        </button>
      </div>
    </div>
  );
}
export default Nav;
