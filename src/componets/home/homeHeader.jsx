import React from "react";

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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-house-door-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
                </svg>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./#">
                <img
                  src="/images/graduate-1-svgrepo-com.svg"
                  width="40"
                  height="30"
                  alt="graduate-1-svgrepo-com"
                />
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
                <img
                  src="/images/people-svgrepo-com.svg"
                  width="40"
                  height="30"
                  alt=""
                />
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
            <li class="nav-item">
              <a class="nav-link" href="./#">
                <img
                  src="/images/contact-writing-write-svgrepo-com.svg"
                  alt="contact-writing-write-svgrepo-com"
                  width="40"
                  height="30"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default HomeHeader;
