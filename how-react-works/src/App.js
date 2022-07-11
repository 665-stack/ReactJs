
import './App.css';
import Device from './components/Device/Device';

import Watch from './components/watch/Watch';

function App() {
  return (
    <div className="App">
      <Device name="iphone" price="90000"></Device>
      <Watch></Watch>

    </div>
  );
}

export default App;
