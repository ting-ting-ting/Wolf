import { runLinearRegression, setttingRole, getProbability } from './utils/settingRole';
import Seat from './components/Seat.jsx';
import './App.css';


function App() {
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
    </div>
  );
}

export default App;
