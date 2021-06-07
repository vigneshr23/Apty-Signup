import React, { Fragment } from "react";
import "./checkbox.scss";

export const Checkbox = ({ text, name, ...props }) => {
  return (
    <div className="input-field">
      <label className="input-field__checkbox">{text}
        <input type="checkbox" name={name} />
        <span className="input-field__checkbox__checkmark"></span>
      </label>
    </div>
  )
}
