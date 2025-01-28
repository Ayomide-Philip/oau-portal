import React from "react";

function navbarBrand(props) {
  return (
    <a class="navbar-brand" href="./#">
      <img
        src={props.schoolLogo}
        alt="Logo"
        width="100"
        height="200"
        className="d-inline-block align-text-top"
      />
    </a>
  );
}

export default navbarBrand;
