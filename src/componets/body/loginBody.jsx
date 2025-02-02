import React from "react";

function LoginBody() {
  return (
    <div className="main-container">
      <div class="card mx-auto my-5">
        <img src="/images/oaulogo.png" class="card-img-top" alt="School Logo" />
        <div class="card-body">
          <h5 class="card-title display-6 text-center">Login</h5>
          <div class="input-group mb-3">
            <span class="input-group-text">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-person-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
              </svg>
            </span>
            <div class="form-floating">
              <input
                type="text"
                class="form-control"
                id="utmeMatricNumber"
                placeholder="UTME/MATRIC No."
              />
              <label for="utmeMatricNumber">UTME/MATRIC No.</label>
            </div>
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-shield-lock-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.8 11.8 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7 7 0 0 0 1.048-.625 11.8 11.8 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.54 1.54 0 0 0-1.044-1.263 63 63 0 0 0-2.887-.87C9.843.266 8.69 0 8 0m0 5a1.5 1.5 0 0 1 .5 2.915l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99A1.5 1.5 0 0 1 8 5"
                />
              </svg>
            </span>
            <div class="form-floating">
              <input
                type="password"
                class="form-control"
                id="passswordSurname"
                placeholder="Passsword/Surname"
              />
              <label for="passswordSurname">Passsword/Surname</label>
            </div>
            <span class="input-group-text" id="viewPassword">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-eye-fill"
                viewBox="0 0 16 16"
              >
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
              </svg>
            </span>
          </div>
          <div class="d-grid gap-2 col-6 mx-auto">
            <button class="btn btn-primary" type="button">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginBody;
