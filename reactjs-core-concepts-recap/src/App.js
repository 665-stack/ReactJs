import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <District name="Gazipur" spacial="Industrial city"></District>
      <District name="Dhaka" spacial="Capital city"></District>
      <District name="Kishorganj" spacial="Haor"></District>
    </div>
  );
}
const districtStyle = {
  backgroundColor: 'brown',
  margin: '20px',
  borderRadius: '20px',
  padding: '20px'
}
function District(props) {
  const [power, setPower] = useState(1);


  const boostPower = () => {
    const newPower = power * 2;
    setPower(newPower)
  }
  return (
    <div style={districtStyle}>
      <h2>Name: {props.name}</h2>
      <p>Specialty: {props.spacial}</p>
      <h4>Power: {power}</h4>
      <button onClick={boostPower} className="boostBtn">Boost The Power </button>
    </div>
  )
}

export default App;
