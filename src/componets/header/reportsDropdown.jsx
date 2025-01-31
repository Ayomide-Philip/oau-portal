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
        <Link className="dropdown-item" url="./#" text=" Accomdation Aggrement Form" />
          <a className="dropdown-item" href="./#">
           
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="./#">
            BedSpace Clerance
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="./#">
            Course Registration
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="./#">
            Clearance Certificate
          </a>
        </li>
      </ul>
    </li>
  );
}

export default ReportsDropdown;
