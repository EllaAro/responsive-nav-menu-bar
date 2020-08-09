import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <nav>
      <label className="logo">Design</label>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Feedback</a>
        </li>
      </ul>
    </nav>
  );
}
