import React, { Fragment } from "react";
import "./input.scss";

export const Input = ({ type, value, name, events, placeholder, icon, ...props }) => {
  return (
    <div className="input-field">
      {icon && <Icon src={icon} />}
      <label htmlFor={name} />
      <input
        id={name}
        type={type}
        value={value}
        name={name}
        onChange={events.onChange}
        placeholder={placeholder}
      />
    </div>
  )
}

Input.defaultProps = {
  events: { onChange: () => {} },
  type: "text",
  value: "",
  name: "",
  placeholder: "Lorem ipsum"
}

const Icon = (src, color) => {
  return (
    <Fragment>
      
    </Fragment>
  )
}