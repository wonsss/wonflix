import React from "react";
import "./Header.css"

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
    <header className="nav">
        <ul>
            <li><a href="/">Movies</a></li>
            <li><a href="/tv">Tv</a></li>
            <li><a href="/search">Search</a></li>
        </ul>
    </header>
);