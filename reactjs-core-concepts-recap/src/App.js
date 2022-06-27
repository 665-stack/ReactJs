import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <District name="Gazipur" speical="Industrial city"></District>
      <District name="Dhaka" speical="Capital city"></District>
      <District name="Kishorganj" speical="Haor"></District>
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

  return (
    <div style={districtStyle}>
      <h2>Name: {props.name}</h2>
      <p>Specialiy: {props.speical}</p>
    </div>
  )
}

export default App;
