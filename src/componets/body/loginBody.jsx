import React from "react";

function LoginBody() {
  return (
    <div className="main-container">
      <div class="card mx-auto my-5">
        <img src="/images/oaulogo.png" class="card-img-top" alt="School Logo" />
        <div class="card-body">
          <h5 class="card-title display-6 text-center">Login</h5>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">
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
            <input
              type="text"
              class="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <a href="./#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default LoginBody;
