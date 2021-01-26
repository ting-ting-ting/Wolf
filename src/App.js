import React, { useState } from 'react';
import { runLinearRegression, setttingRole, getProbability } from './utils/settingRole';
import Seat from './components/Seat.jsx';
import './App.css';

function App() {
  const [roles, setRoles] = useState([]);
console.log('roles', roles)
  return (
    <div className="App">
      <div className="table">
        <div className="seat-col">
          <Seat />
          <Seat />
          <Seat />
          <Seat />
          <Seat />
          <Seat />
        </div>
        <div className="seat-col">
          <Seat />
          <Seat />
          <Seat />
          <Seat />
          <Seat />
          <Seat />
        </div>
      </div>
      <div className="setting-role-btn-wrapper">
        <button type="button" onClick={() => setRoles(setttingRole().roles)}>發牌</button>
      </div>
    </div>
  );
}

export default App;
