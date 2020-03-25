import React, { useState } from 'react';
import FocusTrap from "focus-trap-react";

import "./App.css";

function Header({ onClickMenuButton }) {
  return (
    <div className="Header">
      <button onClick={onClickMenuButton} aria-label="Open menu" className="Header__menu-button">
        <i className="Header__menu-icon material-icons">menu</i>
      </button>
      <h1 className="Header__title">
        My app
      </h1>
    </div>
  );
}

function Sidebar({ isOpen, onClickMask }) {
  let className = "Sidebar";

  if (!isOpen) {
    className += " Sidebar--closed";
  }

  return (
    <FocusTrap paused={!isOpen}>
      <div>
        {isOpen && (
          <label onClick={onClickMask} className="Sidebar__mask">
            <button aria-label="Close menu" className="Sidebar__mask-button"></button>
          </label>
        )}
        <div className={className}>
          <ul className="Sidebar__menu">
            <li className="Sidebar__menu-item">
              <a className="Sidebar__menu-link" href="#home">Home</a>
            </li>
            <li className="Sidebar__menu-item">
              <a className="Sidebar__menu-link" href="#home">About</a>
            </li>

          </ul>
        </div>
      </div>
    </FocusTrap>
  );
}

function App() {
  const [sidebarIsOpen, updateSidebarIsOpen] = useState(false);

  return (
    <>
      <Header onClickMenuButton={() => updateSidebarIsOpen(true)} />
      <Sidebar onClickMask={() => updateSidebarIsOpen(false)} isOpen={sidebarIsOpen} />
      <div style={{ margin: 10 }}>
        <h2>Sidebar example</h2>
        <p>A simple app with a sidebar which traps focus.</p>
        <button>A button</button>
        <button>Another button</button>
      </div>
    </>
  );
}

export default App;
