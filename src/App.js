import React, { useState } from 'react';
import { uniqueId } from 'lodash';
import { setttingRole } from './utils/settingRole';
import Seat from './components/Seat.jsx';
import {
  WOLF_MODE,
  SEER_MODE,
  WITCH_MODE,
} from './constants';
import './App.css';

function App() {
  const [roles, setRoles] = useState([]);
  const [mode, setMode] = useState(WOLF_MODE);
  const firstCol = roles.slice(0, 6);
  const SecondCol = roles.slice(6, 12);

  return (
    <div className="App">
      <div className="table">
        <div className="seat-col">
          {firstCol.map((r, index) => (
            <Seat key={uniqueId(`${r}-${index + 1}`)} role={r} number={index + 1} mode={mode} />
          ))}
        </div>
        <div className="seat-col">
          {SecondCol.map((r, index) => (
            <Seat key={uniqueId(`${r}-${index + 7}`)} role={r} number={index + 7} mode={mode} />
          ))}
        </div>
      </div>
      <div className="mode-selector">
        <button type="button" className={mode === WOLF_MODE ? 'is-active' : ''} onClick={() => setMode(WOLF_MODE)}>
          狼人模式
        </button>
        <button type="button" className={mode === SEER_MODE ? 'is-active' : ''} onClick={() => setMode(SEER_MODE)}>
          預言家模式
        </button>
        <button type="button" className={mode === WITCH_MODE ? 'is-active' : ''} onClick={() => setMode(WITCH_MODE)}>
          女巫模式
        </button>
      </div>
      <div className="setting-role-btn-wrapper">
        <button type="button" onClick={() => setRoles(setttingRole().roles)}>發牌</button>
      </div>
    </div>
  );
}

export default App;
