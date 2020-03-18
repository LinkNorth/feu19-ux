import React from 'react';
import logo from './logo.svg';
import './App.css';

import TextField from './TextField';

function App() {
  return (
    <>
      <p>Normal text field</p>
      <TextField />
      <p>Disabled text field</p>
      <TextField disabled />
    </>
  );
}

export default App;
