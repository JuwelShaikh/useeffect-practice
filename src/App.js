import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Comments/>
    </div>
  );
}

const Comments = () =>{
  return(
    <div>
      <h2>Id:</h2>
      <h1>Name: </h1>
      <p>Comments:</p>
    </div>
  )
}

export default App;
