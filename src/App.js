import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Comments/>
    </div>
  );
}

const Comments = () =>{
  const [comments, setComments] = useState([])
  
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/comments');
    .then(res => res.json())

  },[]);

  return(
    <div>
      <h2>Id:</h2>
      <h1>Name: </h1>
      <p>Comments:</p>
    </div>
  )
}

export default App;
