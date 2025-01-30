import React from "react";

function Link(props) {
  return (
    <a className={props.className} href={props.url}>
      {props.text}
    </a>
  );
}

export default Link;
