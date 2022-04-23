import React from "react";

export default function Input(props) {
  return (
    <div className={props.id}>
      <label htmlFor={props.id}>
        {props.id[0].toUpperCase() + props.id.slice(1)}:
      </label>
      <input
        type={props.type}
        id={props.id}
        className={props.id}
        autocomplete="on"
      />
    </div>
  );
}
