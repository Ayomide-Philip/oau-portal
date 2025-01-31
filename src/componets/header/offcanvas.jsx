import React from "react";
import profile from "./images/profile-svgrepo-com.svg";
import List from "./lists";
import PaymentMethodDropdown from "./paymentMethodDropdown";
import OnlineScreening from "./onlineScreening";
import BedspaceDropdown from "./bedspaceDropdown";
import ReportsDropdown from "./reportsDropdown";
function Offcanvas() {
  return (
    <div
      className="offcanvas offcanvas-end"
      tabIndex="-1"
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
              <img src={profile} alt="person-image" />
              <h5>Lorem, ipsum dolor.</h5>
            </div>
          </li>

          <List
            listClassName="nav-item"
            linkClassName="nav-link active"
            url="./#"
            text="Profile Page"
          />

          <List
            listClassName="nav-item"
            linkClassName="nav-link"
            url="./#"
            text="Health Center Registration"
          />

          <List
            listClassName="nav-item"
            linkClassName="nav-link"
            url="./#"
            text="Teaching Assignment"
          />

          <PaymentMethodDropdown />

          <List
            listClassName="nav-item"
            linkClassName="nav-link"
            url="./#"
            text="Complete Certificate Form"
          />

          <OnlineScreening />

          <List
            listClassName="nav-item"
            linkClassName="nav-link"
            url="./#"
            text=" Check Admission Status"
          />

          <List
            listClassName="nav-item"
            linkClassName="nav-link"
            url="./#"
            text="  Activate Late Registration Payment"
          />

          <List
            listClassName="nav-item"
            linkClassName="nav-link"
            url="./#"
            text="Update Biodata Information"
          />

          <List
            listClassName="nav-item"
            linkClassName="nav-link"
            url="./#"
            text="Register Courses"
          />

          <List
            listClassName="nav-item"
            linkClassName="nav-link"
            url="./#"
            text=" Complete Health Centre Form"
          />

          <List
            listClassName="nav-item"
            linkClassName="nav-link"
            url="./#"
            text="View Semester Raw Score"
          />

          <List
            listClassName="nav-item"
            linkClassName="nav-link"
            url="./#"
            text="Check Results"
          />

          <List
            listClassName="nav-item"
            linkClassName="nav-link"
            url="./#"
            text="Check Messages"
          />
          <BedspaceDropdown />

          <ReportsDropdown />

          <List
            listClassName="nav-item"
            linkClassName="nav-link"
            url="./#"
            text="Print ICT Certificate"
          />

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="./#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Documentations
            </a>
            <ul className="dropdown-menu">
              <li>
                <a
                  className="dropdown-item"
                  href="https://eportal.oauife.edu.ng/info2018_2019.pdf"
                >
                  Registration Information and Fees Breakdown
                </a>
              </li>
            </ul>
          </li>

          <List
            listClassName="nav-item"
            linkClassName="nav-link"
            url="./#"
            text="Contact Councellor"
          />

          <List
            listClassName="nav-item"
            linkClassName="nav-link"
            url="./#"
            text="Change Password"
          />

          <List
            listClassName="nav-item"
            linkClassName="nav-link"
            url="./#"
            text="Sign Out"
          />
        </ul>
      </div>
    </div>
  );
}

export default Offcanvas;
