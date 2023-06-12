import logo from './logo.svg';
import './App.css';
import Car from './Components/Car';
import Events from './Components/Events';
import Phone from './Components/Phone';
import Color from './Components/Color';

function App() {
  const carinfo = {name: "Ford", model: "Mustang"};
  const bagelStyle = {borderRadius:'100%'}
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdx7wC6c1gaCs8I9xgV5NGfTg1723iUzFijQ&usqp=CAU" style={bagelStyle} className="App-logo" alt="logo" />
        <Car model={carinfo.model} name={carinfo.name}/>
        <Events/>
        <Phone />
        <Color />
      </header>
    </div>
  );
}

export default App;
