import React from "react";
import Link from "./link";
function ReportsDropdown() {
  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="./#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Reports
      </a>
      <ul className="dropdown-menu">
        <li>
          <Link
            className="dropdown-item"
            url="./#"
            text="Basic Rules/Regulations in Halls of Residence"
          />
        </li>
        <li>
          <Link
            className="dropdown-item"
            url="./#"
            text=" Accomdation Aggrement Form"
          />
        </li>
        <li>
          <Link
            className="dropdown-item"
            url="./#"
            text="  BedSpace Clerance"
          />
        </li>
        <li>
          <Link
            className="dropdown-item"
            url="./#"
            text=" Course Registration"
          />
        </li>
        <li>
          <Link
            className="dropdown-item"
            url="./#"
            text="Clearance Certificate"
          />
        </li>
      </ul>
    </li>
  );
}

export default ReportsDropdown;
