import './App.css';
import Todos from "./components/Todos";

function App() {
  return (
    <div className="App">
      <div className='AppContainer'>
        <h1>Todo List</h1>
        <Todos/>
      </div>
    </div>
  );
}

export default App;
