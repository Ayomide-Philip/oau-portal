import React from "react";
import Link from "./link";

function DocumentationsDropdown() {
  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="./#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Documentations
      </a>
      <ul className="dropdown-menu">
        <li>
          <Link
            className="dropdown-item"
            url="https://eportal.oauife.edu.ng/info2018_2019.pdf"
            text="Registration Information and Fees Breakdown"
          />
        </li>
      </ul>
    </li>
  );
}

export default DocumentationsDropdown;
