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
              <Link
                className="dropdown-item"
                url="./#"
                text="   OAU Road Map"
              />
            </li>
            <li>
              <Link
                className="dropdown-item"
                url="./#"
                text="University Examination Regulations"
              />
            </li>
            <li>
              <Link
                className="dropdown-item"
                url="./#"
                text="  Library Information"
              />
            </li>
            <li>
              <Link
                className="dropdown-item"
                url="./#"
                text="  Sport Regulations"
              />
            </li>
          </ul>
        </li>
      </ul>
    </li>
  );
}

export default OnlineScreening;
