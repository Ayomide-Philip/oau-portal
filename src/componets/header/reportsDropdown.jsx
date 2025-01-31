import React from "react";

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
          <a className="dropdown-item" href="./#">
            Basic Rules/Regulations in Halls of Residence
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="./#">
            Accomdation Aggrement Form
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
