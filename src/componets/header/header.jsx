import React from "react";
import schoolLogo from "./images/oaulogo.png";
import Menubutton from "./menubutton";
import Offcanvas from "./offcanvas";
function Header() {
  return (
    <nav className="navbar fixed-top" style={{ backgroundColor: "#aab6c4" }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="./#">
          <img
            src={schoolLogo}
            alt="Logo"
            width="100"
            height="100"
            className="d-inline-block align-text-top"
          />
        </a>
        <div className="headingTop">
          <h1 className="display-6">OAU Student Information Portal</h1>
        </div>

        <Menubutton />
        <Offcanvas />
      </div>
    </nav>
  );
}

export default Header;
