import React from "react";
import Menubutton from "./menubutton";
import Offcanvas from "./offcanvas";
function Header() {
  return (
    <nav className="navbar fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="./#">
          <img
            src="/images/oaulogo.png"
            alt="Logo"
            width="100"
            height="100"
            className="d-inline-block align-text-top"
          />
        </a>
        <div className="headingTop">
          <h1 className="display-6">
            <strong>OAU Student Information Portal</strong>
          </h1>
        </div>

        <Menubutton />
        <Offcanvas />
      </div>
    </nav>
  );
}

export default Header;
