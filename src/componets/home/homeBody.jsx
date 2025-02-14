import React from "react";
import DivBody from "./bodyComponet/divBody";

function HomeBody() {
  return (
    <div className="background-image1 background-image">
      <div class="text-center background container-fluid">
        <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2">
          <div class="col-md-4 mt-3 mb-3">
            <img
              src="/images/oaulogo.png"
              alt="oaulogo"
              width="250px"
              height="250px"
            />
          </div>
          <div class="col-md-8 mt-3 mb-3">
            <DivBody
              className="h1 heading-5"
              color="#FECD4A"
              text="OBAFEMI AWOLOWO UNIVERSITY"
            />
            <DivBody
              className="h3"
              color="white"
              text="(STUDENT INFORMATION PORTAL)"
            />
            <DivBody className="h1 heading-4" color="#FECD4A" text="Welcome" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBody;
