import { runLinearRegression, setttingRole } from './utils/settingRole';
import './App.css';


function App() {
  return (
    <div className="App">
      <button type="button" onClick={setttingRole}>
        role setting
      </button>
      <button type="button" onClick={runLinearRegression}>
        Linear Regression
      </button>
    </div>
  );
}

export default App;
