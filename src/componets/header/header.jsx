import React from "react";
import schoolLogo from "./images/oaulogo.png";
import Link from "./link";
import Menubutton from "./menubutton";
function Header() {
  return (
    <nav className="navbar fixed-top" style={{ backgroundColor: "#aab6c4" }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="./#">
          <img
            src={schoolLogo}
            alt="Logo"
            width="100"
            height="200"
            className="d-inline-block align-text-top"
          />
        </a>
        <h5>OAU Student Information Portal</h5>
        <Menubutton />
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
      </div>
    </nav>
  );
}

export default Header;
