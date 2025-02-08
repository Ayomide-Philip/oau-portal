import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div class=" text-start">
          <div class="row align-items-start">
            <div class="col">
              <a href="./#">Privacy Statement</a>
            </div>
            <div class="col">
              <a href="./#">Examination Time Table</a>
            </div>
          </div>

          <div class="row align-items-start">
            <div class="col">
              <a href="./#">Terms and Conditions of Use</a>
            </div>
            <div class="col">
              <a href="./#"> Contact Us</a>
            </div>
          </div>

          <div class="row align-items-start">
            <div class="col">
              <a href="./#">Legal Notice</a>
            </div>
            <div class="col">
              <a href="./#"> Student Help</a>
            </div>
          </div>

          <div class="row align-items-start">
            <div class="col">
              <a href="./#">FAQ</a>
            </div>
            <div class="col">
              <a href="./#"> Staff Help</a>
            </div>
          </div>

          <div class="row align-items-start">
            <div class="col">
              <a href="./#">Lecture Timetable</a>
            </div>
          </div>
        </div>

        <p className="lead">
          &copy; 2006 - {new Date().getFullYear()} Obafemi Awolowo University
        </p>
      </div>
    </footer>
  );
}

export default Footer;
