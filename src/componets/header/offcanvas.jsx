import React from "react";
import Link from "./link";
import schoolLogo from "./images/oaulogo.png";

function Offcanvas() {
  const handleNestedDropdownClick = (event) => {
    event.stopPropagation(); // Prevents the parent dropdown from closing
  };
  return (
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

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="./#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Payment Activities
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="./#">
                  Payment Via Remita
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="./#">
                  View Payment Status
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="./#">
                  Download Payment Slip from Cash Office
                </a>
              </li>
            </ul>
          </li>

          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="./#">
              Complete Certificate Form
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
              Online Screening
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="./#">
                  Upload Picture
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="./#">
                  Upload Signature
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="./#">
                  Verification Of Particulars
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="./#">
                  Load Certificate Form
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="./#">
                  Upload Scanned Certificate
                </a>
              </li>
              <li class="dropdown-item nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="./#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={handleNestedDropdownClick}
                >
                  Download
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="./#">
                      OAU Road Map
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="./#">
                      University Examination Regulations
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="./#">
                      Library Information
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="./#">
                      Sport Regulations
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="./#">
              Check Admission Status
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="./#">
              Activate Late Registration Payment
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="./#">
              Update Biodata Information
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="./#">
              {" "}
              Register Courses{" "}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="./#">
              Complete Health Centre Form
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="./#">
              {" "}
              View Semester Raw Score
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="./#">
              Check Results
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="./#">
              Check Messages
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
              Bedspace Request
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="./#">
                  Information On Accomdation
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="./#">
                  All Fresher BedSpace Request
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="./#">
                  Final Year BedSpace Request
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="./#">
                  Part 2 BedSpace Request
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="./#">
                  Part 3 BedSpace Request
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="./#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Reports
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="./#">
                  Basic Rules/Regulations in Halls of Residence
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="./#">
                  Accomdation Aggrement Form
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="./#">
                  BedSpace Clerance
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="./#">
                  Course Registration
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="./#">
                  Clearance Certificate
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="./#">
              Print ICT Certificate
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
            <a class="nav-link active" aria-current="page" href="./#">
              Contact Councellor
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="./#">
              Change Password
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="./#">
              Sign Out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Offcanvas;
