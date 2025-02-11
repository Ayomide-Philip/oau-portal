import React from "react";
import List from "../undergraduate/header/lists";

function HomeHeader() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-primary fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="./#">
          <img
            src="/images/oaulogo.png"
            alt="Logo"
            width="100"
            height="100"
            className="d-inline-block align-text-top"
          />
        </a>
        <div className="headingTop">
          <h1>
            <div>
              <strong style={{ color: "#FECD42" }}>
                OBAFEMI AWOLOWO UNIVERSITY
              </strong>
            </div>
          </h1>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ backgroundColor: "white", color: "black" }}
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="./#">
                <img
                  src="/images/home-1-svgrepo-com.svg"
                  alt=""
                  width="40px"
                  height="30px"
                  className="d-none d-lg-block"
                />
                <span className="d-inline d-lg-none">Home</span>
              </a>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link"
                href="./#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="/images/graduate-1-svgrepo-com.svg"
                  width="40"
                  height="30"
                  alt="graduate-1-svgrepo-com"
                  className="d-none d-lg-block"
                />
                <span className="d-inline d-lg-none">Students</span>
              </a>
              <ul class="dropdown-menu dropdown-menu-end mt-2">
                <li>
                  <a class="dropdown-item" href="./#">
                    UnderGraduate
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="./#">
                    PostGraduate
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="./#">
                    Executive MBA
                  </a>
                </li>
              </ul>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link"
                href="./#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="/images/people-svgrepo-com.svg"
                  width="40"
                  height="30"
                  alt=""
                  className="d-none d-lg-flex"
                />
                <span className="d-inline d-lg-none">Staff</span>
              </a>
              <ul class="dropdown-menu dropdown-menu-end mt-2">
                <li>
                  <a class="dropdown-item" href="./#">
                    Staff Login
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="./#">
                    Bursary
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./#">
                <img
                  src="/images/contact-writing-write-svgrepo-com.svg"
                  alt="contact-writing-write-svgrepo-com"
                  width="40"
                  height="30"
                  className="d-none d-lg-block"
                />
                <span className="d-inline d-lg-none">Contact</span>
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link"
                href="./#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="/images/more-horizontal-circle-svgrepo-com.svg"
                  width="40"
                  height="30"
                  alt="more-horizontal-circle-svgrepo-com"
                  className="d-none d-lg-flex"
                />
                <span className="d-inline d-lg-none">More</span>
              </a>
              <ul class="dropdown-menu dropdown-menu-end  mt-2">
                <li>
                  <a class="dropdown-item" href="./#">
                    Staff Login
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="./#">
                    Bursary
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default HomeHeader;
