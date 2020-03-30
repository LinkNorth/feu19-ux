import React, { useMemo } from "react";

import "./TextField.css";

let currentId = 0;

function getNextId() {
  let rv = `text-field-${currentId}`;
  currentId += 1;
  return rv;
}

export default function TextField({
  placeholder,
  value = "",
  ...props
}) {
  let placeholderClassName = "TextField__placeholder";

  const inputId = useMemo(getNextId, []);

  if (value.length > 0) {
    placeholderClassName += " TextField__placeholder--top";
  }

  return (
    <div className="TextField">
      <input
        className="TextField__input"
        value={value}
        {...props}
        id={inputId}
      />
      <label htmlFor={inputId} className="TextField__label" />
      <span className={placeholderClassName}>
        {placeholder}
      </span>
      <div className="TextField__underline" />
    </div>
  );
};
