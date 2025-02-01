import React from "react";
import List from "./lists";
import PaymentMethodDropdown from "./paymentMethodDropdown";
import OnlineScreening from "./onlineScreening";
import BedspaceDropdown from "./bedspaceDropdown";
import ReportsDropdown from "./reportsDropdown";
import DocumentationsDropdown from "./documentationDropdown";

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
              <img src="/images/profile-svgrepo-com.svg" alt="person-image" />
              <h5>Lorem, ipsum dolor.</h5>
            </div>
          </li>

          <List
            listClassName="nav-item"
            linkClassName="nav-link active"
            url="/home"
            text="Profile Page"
          />

          <List
            listClassName="nav-item"
            linkClassName="nav-link"
            url="/healthRegistration"
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

          <DocumentationsDropdown />

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
