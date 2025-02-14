import React from "react";

function DivBody(props) {
  return (
    <div className={props.className} style={{ color: props.color }}>
    {props.text}
    </div>
  );
}

export default DivBody;
