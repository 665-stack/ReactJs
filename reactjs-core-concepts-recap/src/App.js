import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadPost></LoadPost>
      <District name="Gazipur" spacial="Industrial city"></District>
      <District name="Dhaka" spacial="Capital city"></District>
      <District name="Kishorganj" spacial="Haor"></District>
    </div>
  );
}
// loadPost component
function LoadPost() {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => setPost(data))
  }, [])
  return (
    <div>
      <h1>Posts: {posts.length}</h1>
      {
        posts.map(post => <Post title={post.title} body={post.body}></Post>)
      }
    </div>
  )
}
// post component
function Post(props) {
  return (
    <div className='post-container'>
      <h3>Title: {props.title}</h3>
      <p>Body: {props.body}</p>
    </div>
  )
}

// object for style
const districtStyle = {
  backgroundColor: 'brown',
  margin: '20px',
  borderRadius: '20px',
  padding: '20px'
}
// district component
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
