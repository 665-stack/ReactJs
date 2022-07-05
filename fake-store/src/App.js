// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './Components/Menubar/Menubar';
import AllProducts from './Components/AllProducts/AllProducts';
import { useState } from 'react';



function App() {
  const [count, setCount] = useState(0)
  const setCardCount = () => {
    setCount(count + 1);
  }
  return (
    <div className="App">
      <Menubar count={count}></Menubar>
      <AllProducts setCardCount={setCardCount}></AllProducts>
    </div>
  );
}

export default App;
