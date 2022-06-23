import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  )
}
function Counter() {
  const [count, setCount] = useState(21);
  //shortcut code
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);

  // little bit longer code
  /* const increaseCount = () => {
    const newCount = count + 1;
    setCount(newCount)
  } */
  return (
    <div>
      <h1>Count: {count} </h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}










/*function App() {
  const products = [
    { name: 'MSI Modern 14 B10MW', price: 48000 },
    { name: 'HP M22f 22" FHD IPS Monitor', price: 17000 },
    { name: 'PC Build', price: 45000 }
  ]
  return (
    <div className="App">
      {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      }
      <Product name='MSI Modern 14 B10MW' price='48000'></Product>
      <Product name='HP M22f 22" FHD IPS Monitor' price='17000'></Product>
      <Product name='PC' price='45000'></Product>
    </div >
  );
}

function Product(props) {
  return (
    <div className='product'>
      <h3>Name: {props.name} </h3>
      <p>Price: {props.price}</p>
    </div>
  )
} */

export default App;
