import React from "react";

function HomeBody() {
  return (
    <div
      className="main-container container-xl"
      style={{ marginBottom: "50px" }}
    >
      <div
        class="container text-center mb-5"
        style={{
          backgroundColor: "white",
          borderRadius: "10px",
          padding: "20px",
        }}
      >
        <h2>Personal Information</h2>
        <div class="row">
          <div class="col-md-4 mb-3">
            <img
              src="/images/profile-svgrepo-com.svg"
              alt="profile"
              width="200px"
              height="200px"
              className="profile-picture"
            />
          </div>

          <div class="col-sm-8 text-start">
            <div className="info">
              <span className="lead">Name:</span>
              <span className="lead">Areo Ayomide Philip</span>
            </div>

            <div className="info">
              <span className="lead">Reg. Number/ Matric No:</span>
              <span className="lead">202440604235JF</span>
            </div>

            <div className="info">
              <span className="lead">Departement:</span>
              <span className="lead">Computer Science and Cyber Security</span>
            </div>

            <div className="info">
              <span className="lead">Faculty:</span>
              <span className="lead"> Computing Science and Engineering</span>
            </div>

            <div className="info">
              <span className="lead">Current Part:</span>
              <span className="lead"> 1</span>
            </div>

            <div className="info">
              <span className="lead">Degree Programme:</span>
              <span className="lead">
                B.Sc Computer Science with Mathematics
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container text-center">
        <div className="row row-cols-1 row-cols-md-2 g-3">
          <div className="col">
            <div
              className="p-3"
              style={{ backgroundColor: "white", borderRadius: "10px" }}
            >
              <div>
                <h5>Student Contact Information</h5>
                <div class="col-sm-8 text-start">
                  <div className="info">
                    <span className="lead">Contact No:</span>
                    <span className="lead">+23412345678901</span>
                  </div>

                  <div className="info">
                    <span className="lead">Email:</span>
                    <span className="lead">Loremipsum@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="p-3"
              style={{ backgroundColor: "white", borderRadius: "10px" }}
            >
              Row column 2
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBody;
