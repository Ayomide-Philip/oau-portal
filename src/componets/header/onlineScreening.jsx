import React from "react";
import Link from "./link";
const handleNestedDropdownClick = (event) => {
  event.stopPropagation(); // Prevents the parent dropdown from closing
};

function OnlineScreening() {
  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="./#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Online Screening
      </a>
      <ul className="dropdown-menu">
        <li>
          <Link className="dropdown-item" url="./#" text=" Upload Picture" />
        </li>
        <li>
          <Link className="dropdown-item" url="./#" text=" Upload Signature" />
        </li>
        <li>
          <Link
            className="dropdown-item"
            url="./#"
            text="Verification Of Particulars"
          />
        </li>
        <li>
          <Link
            className="dropdown-item"
            url="./#"
            text="Load Certificate Form"
          />
        </li>
        <li>
          <Link
            className="dropdown-item"
            url="./#"
            text=" Upload Scanned Certificate"
          />
        </li>
        <li className="dropdown-item nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="./#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            onClick={handleNestedDropdownClick}
          >
            Download
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="./#">
                OAU Road Map
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="./#">
                University Examination Regulations
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="./#">
                Library Information
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="./#">
                Sport Regulations
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  );
}

export default OnlineScreening;
