import React from "react";

function FloatingInputLabel(props) {
  return (
    <div className="form-floating">
      <input
        type={props.type}
        className="form-control"
        id={props.id}
        placeholder={props.label}
      />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
}

export default FloatingInputLabel;
