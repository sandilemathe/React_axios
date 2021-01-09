import logo from './logo.svg';
import './App.css';
import PeopleList from "./Components/PeopleList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>The List of people</p>
       </header>
       <PeopleList />
     </div>   
  );
}

export default App;
