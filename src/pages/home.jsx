import React from "react";
import HomeHeader from "../componets/home/homeHeader";
import HomeFooter from "../componets/home/footer";

function Home() {
  return (
    <>
      <HomeHeader />
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
              <div className="h1 heading-5" style={{ color: "#FECD4A" }}>
                OBAFEMI AWOLOWO UNIVERSITY
              </div>
              <div className="h3" style={{ color: "white" }}>
                (STUDENT INFORMATION PORTAL)
              </div>
              <div className="h1 heading-4" style={{ color: "#FECD4A" }}>
                Welcome
              </div>
            </div>
          </div>
        </div>
      </div>
      <HomeFooter />
    </>
  );
}

export default Home;
