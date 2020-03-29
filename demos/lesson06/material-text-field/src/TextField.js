import React from "react";

import "./TextField.css";

export default function TextField({
  type = "Text",
  placeholder,
  value = "",
  disabled = false,
  ...props
}) {
  let placeholderClassName = "TextField__placeholder";
  let containerClassName = "TextField";

  if (value.length > 0) {
    placeholderClassName += " TextField__placeholder--top";
  }

  if (disabled) {
    containerClassName += " TextField--disabled";
  }

  return (
    <div className={containerClassName}>
      <input
        className="TextField__input"
        type={type}
        disabled={disabled}
        {...props}
      />
      <span className={placeholderClassName}>
        {placeholder}
      </span>
      <label className="TextField__label"></label>
      <div className="TextField__underline"></div>
    </div>
  );
};
