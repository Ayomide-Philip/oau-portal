import React from "react";
import schoolLogo from "./images/oaulogo.png";
import navbarBrand from "./navbarBrand";

function Header() {
  return (
    <nav class="navbar fixed-top" style={{ backgroundColor: "#aab6c4" }}>
      <div class="container-fluid">
        <navbarBrand link="./#" alt="Logo" width="100" height="200" />
        <a class="navbar-brand" href="./#">
          <img
            src={schoolLogo}
            alt="Logo"
            width="100"
            height="200"
            className="d-inline-block align-text-top"
          />
        </a>
        <h5>OAU Student Information Portal</h5>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
              Profile Menu
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <div>
                  <img src={schoolLogo} alt="person-image" />
                  <h5>Lorem, ipsum dolor.</h5>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="./#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./#">
                  Link
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="./#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="./#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="./#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="./#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
