import React from "react";

function FloatingInputLabel(props) {
  return (
    <div className="form-floating">
      <input
        onBlur={props.func ? props.func : null}
        type={props.type}
        className="form-control"
        id={props.id}
        placeholder={props.label}
        name={props.id}
      />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
}

export default FloatingInputLabel;
