import React from "react";

function Menubutton() {
  return (
    <button
    className="navbar-toggler btn-outline-primary btn"
    type="button"
    data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasNavbar"
    aria-controls="offcanvasNavbar"
    aria-label="Toggle navigation"
    data-cs-theme="dark"
    style={{ backgroundColor: 'white', color: 'black' }}
  >
    <span className="navbar-toggler-icon"></span>
  </button>
  
  );
}

export default Menubutton;
