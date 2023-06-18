import Counter from "./components/Counter.js";
import './App.css';
import {connect} from "react-redux";
import {incrementCounter, decrementCounter} from "./redux/actions";
import {store} from "./redux/store";
function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Counter />
      </header>
    </div>
  );
}
const mapStateToProps = (state) => {

}

const mapDispatchToProps = () => {}



export default connect(mapStateToProps, mapDispatchToProps) (App);
