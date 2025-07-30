import React from "react";
import styles from "./Header.module.css";

const Header = () => {
    return (
        <div>
            <ul className={styles["ul-header"]}>
                <li className={styles["li-header"]}>
                    <a href="#home"><b>Home</b></a>
                </li>
                <li className={styles["li-header"]}>
                    <a href="#news"><b>News</b></a>
                </li>
                <li className={styles["li-header"]}>
                    <a href="#contact"><b>Contact</b></a>
                </li>
                <li className={styles["li-header"]} style={{ float: "right" }} >
                    <a href="#about"><b>About</b></a>
                </li>
            </ul>
        </div>
    );
}

export default Header;