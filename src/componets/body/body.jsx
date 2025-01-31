import React from "react";

function Body() {
  return (
    <div className="main-container container-xl">
      <div className="rounded-2">
        <img
          src="/images/oaulogo.png"
          className="float-end"
          alt="..."
          height="200px"
          width="200px"
        ></img>
      </div>
      <div>
        <p className="display-6 fs-4">Registration Number: 20241234567JF</p>
        <p className="display-6 fs-4">Name: Test Website</p>
        <p className="display-6 fs-4">Current Part: 1</p>
        <p className="display-6 fs-4">
          Degree Programme: B.Sc Computer Science with Mathematics
        </p>
        <p className="display-6 fs-4">
          Department: Computer Science and Cyber Security
        </p>
        <p className="display-6 fs-4">
          Faculty: Computing Science and Engineering
        </p>
        <p className="display-6 fs-4">
          BedSpace Location: Angola Hall, Block E1, Ground Floor, Room 106, Bed
          No 1 (Lower Bunk)
        </p>
        <p className="display-6 fs-4">Email Address:</p>
        <p className="display-6 fs-4">
          Your Matric/Registration Number,( the alphabets in CAPSLOCK):
          202440604235JF
        </p>
      </div>
    </div>
  );
}

export default Body;
