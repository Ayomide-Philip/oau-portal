import React from "react";

function HomeBody() {
  return (
    <div
      className="main-container container-xl"
      style={{ marginBottom: "50px" }}
    >
      <div
        class="container text-center"
        style={{
          backgroundColor: "white",
          padding: "10px",
          borderRadius: "10px",
        }}
      >
        <h2>Personal Information</h2>
        <div class="row">
          <div class="col-sm-4">
            <img
              src="/images/profile-svgrepo-com.svg"
              alt="profile"
              width="200px"
              height="200px"
              className="profile-picture"
            />
          </div>
          <div class="col-sm-8 text-start">
            <div class="row">
              <div class="col-4">1 of 3</div>
              <div class="col-8">2 of 3 (wider)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBody;
