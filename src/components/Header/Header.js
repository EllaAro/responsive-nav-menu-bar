import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <nav>
      <input type="checkbox" id="check" />
      <label for="check" className="checkbtn">
        <i className="fas fa-bars"></i>
      </label>
      <label className="logo">MyWebsite</label>
      <ul>
        <li>
          <a className="active" href="#">
            Home
          </a>
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
