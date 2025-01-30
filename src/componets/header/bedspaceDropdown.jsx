import React from "react";

function BedspaceDropdown() {
  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="./#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Bedspace Request
      </a>
      <ul className="dropdown-menu">
        <li>
          <a className="dropdown-item" href="./#">
            Information On Accomdation
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="./#">
            All Fresher BedSpace Request
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="./#">
            Final Year BedSpace Request
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="./#">
            Part 2 BedSpace Request
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="./#">
            Part 3 BedSpace Request
          </a>
        </li>
      </ul>
    </li>
  );
}

export default BedspaceDropdown;
