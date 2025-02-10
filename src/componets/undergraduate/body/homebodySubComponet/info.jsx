import React from "react";

function Info(props) {
  return (
    <p className="display-6 fs-4">
      {props.q}:<strong>{props.a}</strong> 
    </p>
  );
}

export default Info;
