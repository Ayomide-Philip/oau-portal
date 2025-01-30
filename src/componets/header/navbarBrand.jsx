import React from "react";
import schoolLogo from "./images/oaulogo.png";

function navbarBrand(props) {
  return (
    <a class="navbar-brand" href={props.link}>
      <img
        src={schoolLogo}
        alt={props.alt}
        width={props.width}
        height={props.height}
        className="d-inline-block align-text-top"
      />
    </a>
  );
}

export default navbarBrand;
