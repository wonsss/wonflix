import React from "react";
import styles from "./Header.module.css"

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
    <header>
        <ul className={styles.navList}>
            <li><a href="/">Movies</a></li>
            <li><a href="/tv">Tv</a></li>
            <li><a href="/search">Search</a></li>
        </ul>
    </header>
);