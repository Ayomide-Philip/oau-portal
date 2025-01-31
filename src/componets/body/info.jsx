import React from "react";

function Info(props) {
  return (
    <p className="display-6 fs-4">
      {props.q}: {props.a}
    </p>
  );
}

export default Info;
