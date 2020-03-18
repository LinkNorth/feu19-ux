import React from "react";

import styles from "./TextField.module.css";

export default function TextField({ disabled, ...props }) {
  return (
    <label className={styles.container}>
      <input
        className={styles.input}
        disabled={disabled}
        type="text"
        {...props}
      />
    </label>
  );
}
