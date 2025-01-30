import React from "react";
import Link from "./link";
import schoolLogo from "./images/oaulogo.png";

function Offcanvas() {
  return (
    <div
      className="offcanvas offcanvas-end"
      tabindex="-1"
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
          Profile Menu
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <div>
              <img src={schoolLogo} alt="person-image" />
              <h5>Lorem, ipsum dolor.</h5>
            </div>
          </li>

          <Link className="nav-link active" url="./#" text="Profile Page" />

          <Link
            className="nav-link"
            url="./#"
            text="Health Center Registration"
          />

          <Link className="nav-link" url="./#" text="Teaching Assignment" />
        </ul>
      </div>
    </div>
  );
}

export default Offcanvas;
