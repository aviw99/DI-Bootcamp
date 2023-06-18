import './App.css';
import React from "react";
import {connect} from "react-redux";
import {changePropOne} from "./redux/actions";
import Counter from "./components/Counter";

class App extends React.Component{
    constructor() {
        super();
        this.state = {
            property_one:'text one'
        }
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Counter />

                </header>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        a:state.property_one,
        b:state.property_two
    }
}
export const mapDispatchToProps = (dispatch) => {
    return{
        changeOne: (e) => dispatch(changePropOne(e.target.value))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
