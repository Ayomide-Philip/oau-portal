import React from "react";
import Link from "./link";
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
          <Link
            className="dropdown-item"
            url="./#"
            text=" Information On Accomdation"
          />
        </li>
        <li>
          <Link
            className="dropdown-item"
            url="./#"
            text=" All Fresher BedSpace Request"
          />
        </li>
        <li>
          <Link
            className="dropdown-item"
            url="./#"
            text=" Final Year BedSpace Request"
          />
        </li>
        <li>
          <Link
            className="dropdown-item"
            url="./#"
            text="  Part 2 BedSpace Request"
          />
        </li>
        <li>
          <Link
            className="dropdown-item"
            url="./#"
            text="Part 3 BedSpace Request"
          />
        </li>
      </ul>
    </li>
  );
}

export default BedspaceDropdown;
