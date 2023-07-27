import logo from './logo.svg';
import './App.css';

function App() {
  let f1=()=>{
    return "Inside f1 function"
  }
  let name="tushar"
  let sirname="satalkar"
  return (
    <div className="App">
      <h1>welcome to react</h1>
      <h2>Welcome {name} to react application</h2>
      <h3>Sirname :{sirname} </h3>
      <h4>{f1()}</h4>
    </div>
  );
}

export default App;
