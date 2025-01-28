import React from "react";
function Header() {
  return (
    <nav class="navbar  fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="a">
          <img
            src="./images/oaulogo.png"
            alt="Logo"
            width="100"
            height="100"
            class="d-inline-block align-text-top"
          />
        </a>
        <div class="headingTop">
          <h1 class="display-6">OAU Student Information Portal</h1>
        </div>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="aoffcanvasNavbar"
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
                  <img
                    src="./images/profile-svgrepo-com.svg"
                    alt="person-image"
                  />
                  <h5>Lorem, ipsum dolor.</h5>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="a">
                  Profile Page
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="a">
                  Health Center Registration
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="a">
                  Teaching Assignment
                </a>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="a"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Payment Activities
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="a">
                      Payment Via Remita
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="a">
                      View Payment Status
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="a">
                      Download Payment Slip from Cash Office
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="a">
                  Complete Certificate Form
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="a"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Online Screening
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="a">
                      Upload Picture
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="a">
                      Upload Signature
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="a">
                      Verification Of Particulars
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="a">
                      Load Certificate Form
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="a">
                      Upload Scanned Certificate
                    </a>
                  </li>
                  <li class="dropdown-submenu">
                    <a
                      class="dropdown-item dropdown-toggle"
                      href="a"
                      role="button"
                    >
                      Download
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="a">
                          OAU Road Map
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="a">
                          University Examination Regulations
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="a">
                          Library Information
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="a">
                          Sport Regulations
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="a">
                  Check Admission Status
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="a">
                  Activate Late Registration Payment
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="a">
                  Update Biodata Information
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="a">
                  {" "}
                  Register Courses{" "}
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="a">
                  Complete Health Centre Form
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="a">
                  {" "}
                  View Semester Raw Score
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="a">
                  Check Results
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="a">
                  Check Messages
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="a"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Bedspace Request
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="a">
                      Information On Accomdation
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="a">
                      All Fresher BedSpace Request
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="a">
                      Final Year BedSpace Request
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="a">
                      Part 2 BedSpace Request
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="a">
                      Part 3 BedSpace Request
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="a"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Reports
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="a">
                      Basic Rules/Regulations in Halls of Residence
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="a">
                      Accomdation Aggrement Form
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="a">
                      BedSpace Clerance
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="a">
                      Course Registration
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="a">
                      Clearance Certificate{" "}
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="a">
                  Print ICT Certificate
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="a"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Documentations
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a
                      class="dropdown-item"
                      href="https://eportal.oauife.edu.ng/info2018_2019.pdf"
                    >
                      Registration Information and Fees Breakdown
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="a">
                  Contact Councellor
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="a">
                  Change Password
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="a">
                  Sign Out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
