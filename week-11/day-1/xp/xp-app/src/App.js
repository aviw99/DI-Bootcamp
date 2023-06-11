import logo from './logo.svg';
import './App.css';
import NoJSX from './NoJSX';
import Myelement from './WithJSX';
import FavAnimalsComponent from './UserFavoriteColors';
import Exercise4 from './Exercise4';

const Sum = 5 + 5;
const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals : ['Horse','Turtle','Elephant','Monkey']
};
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World!</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <NoJSX/>
        <Myelement/>
        <h3>React is {Sum} times better with JSX</h3>
        <h3>{user.firstName}</h3>
        <h3>{user.lastName}</h3>
        {user.favAnimals.map((item, i) => {
          return (
          <FavAnimalsComponent key = {i} favAnimal = {item}/>
          )
        })}
        <Exercise4/>
      </header>
    </div>
  );
}

export default App;
