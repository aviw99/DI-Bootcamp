import './App.css';
import React from "react";
import {connect} from "react-redux";
import {mapStateToPropsFactory} from "react-redux/es/connect/mapStateToProps";
import {mapDispatchToPropsFactory} from "react-redux/es/connect/mapDispatchToProps";
import {changePropOne} from "./redux/actions";
import Test from "./components/Test";
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
                    {/*<h2>Simple Redux Example</h2>*/}
                    {/*<div>*/}
                    {/*    Change Prop One: <input onChange={this.props.changeOne}/>*/}
                    {/*</div>*/}
                    {/*/!*<div>{this.state.property_one}</div><br/>*!/*/}
                    {/*<div>{this.props.a}</div>*/}
                    {/*<div>{this.props.b}</div>*/}
                    {/*/!*<Test />*!/*/}
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
