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
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => setComments(data));
  },[]);

  return(
    <div>
      <h2>Total comment: {comments.length}</h2>
      {
        comments.map(comment => <Comment name = {comment.name} id= {comment.id} body={comment.body} /> )
      }
    </div>
  )
}

// style
const styleProps = {
  backgroundColor: 'skyblue',
  margin: '5px',
  padding: '5px',
  border: '3px solid black',
  borderRadius: '10px'
}

const Comment = (props) =>{
  return(
    <div style={styleProps}>
      <h2>Name: {props.name}</h2>
      <h3>ID: {props.id}</h3>
      <p>{props.body}</p>
    </div>
  )
}

export default App;
