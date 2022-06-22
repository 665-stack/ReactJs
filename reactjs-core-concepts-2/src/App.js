import logo from './logo.svg';
import './App.css';

function App() {
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
      {/* <Product name='MSI Modern 14 B10MW' price='48000'></Product>
      <Product name='HP M22f 22" FHD IPS Monitor' price='17000'></Product>
      <Product name='PC' price='45000'></Product> */}
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
}

export default App;
