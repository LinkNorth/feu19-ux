import React, { useState } from 'react';
import logo from './logo.svg';

import TextField from "./TextField";

function App() {
  const [value, updateValue] = useState("");
  const [disabled, updateDisabled] = useState(false);

  return (
    <>
      <div
        style={{
          margin: 20,
        }}
      >
        <input
          type="text"
          value={value}
          disabled={disabled}
          onChange={(e) => updateValue(e.target.value)}
          placeholder="Label"
        />
        <input
          type="checkbox"
          checked={disabled}
          onChange={() => updateDisabled(!disabled)}
        />
      </div>
      <div
        style={{
          margin: 20,
        }}
      >
        <TextField
          type="text"
          value={value}
          disabled={disabled}
          onChange={(e) => updateValue(e.target.value)}
          placeholder="Label"
        />
      </div>
    </>
  );
}

export default App;
