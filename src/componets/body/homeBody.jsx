import React from "react";
import Info from "./homebodySubComponet/info";

function HomeBody() {
  return (
    <div className="main-container container-xl">
      <div className="rounded-2 profile">
        <img
          src="/images/profile-svgrepo-com.svg"
          className="float-end profile-picture"
          alt="profile"
          height="200px"
          width="200px"
        />
      </div>
      <div>
        <p className="display-4">Student Details</p>
        <Info q="Registration Number" a="20241234567JF" />
        <Info q="Name" a="Areo Ayomide Philip" />
        <Info q="Current Part" a="1" />
        <Info q="Degree Programme" a="B.Sc Computer Science with Mathematics" />
        <Info q="Department" a="Computer Science and Cyber Security" />
        <Info q="Faculty" a="Computing Science and Engineering" />
        <Info
          q="BedSpace Location"
          a="Angola Hall, Block E1, Ground Floor, Room 106, Bed No 1 (Lower Bunk)"
        />
        <Info q="Email Address" a="" />
        <Info
          q="Your Matric/Registration Number,( the alphabets in CAPSLOCK)"
          a="202440604235JF"
        />
      </div>
    </div>
  );
}

export default HomeBody;
