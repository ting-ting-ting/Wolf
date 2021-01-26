import React, { useState } from 'react';
import { uniqueId } from 'lodash';
import { setttingRole } from './utils/settingRole';
import Seat from './components/Seat.jsx';
import './App.css';

function App() {
  const [roles, setRoles] = useState([]);
  const firstCol = roles.slice(0, 6);
  const SecondCol = roles.slice(6, 12);

  return (
    <div className="App">
      <div className="table">
        <div className="seat-col">
          {firstCol.map((r, index) => (
            <Seat key={uniqueId(`${r}-${index + 1}`)} role={r} number={index + 1} />
          ))}
        </div>
        <div className="seat-col">
          {SecondCol.map((r, index) => (
            <Seat key={uniqueId(`${r}-${index + 7}`)} role={r} number={index + 7} />
          ))}
        </div>
      </div>
      <div className="setting-role-btn-wrapper">
        <button type="button" onClick={() => setRoles(setttingRole().roles)}>發牌</button>
      </div>
    </div>
  );
}

export default App;
