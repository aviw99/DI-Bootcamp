import React from "react";
import { useState } from "react";

class Events extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isToggleOn: true
        }
    }
    clickMe = () => {
        alert('I was clicked')
    }
    handleKeyDown = (e) => {
        if(e.keyCode === 13){
            alert(`The Enter key was pressed, your input is: ${e.target.value}`)
        }
    }
    toggleOnOff = (e) => {
        if(this.state.isToggleOn === true){
            this.setState({isToggleOn: false})
            
        }else{
            this.setState({isToggleOn: true})
            
        }
    }
 
    render(){
        return(
            <div>
                <button onClick={this.clickMe}>Click</button>
                <br></br>
                <input name='input' type="text" onKeyDown={this.handleKeyDown} placeholder='Press the ENTER key'></input>
                <br></br>
                <button onClick={this.toggleOnOff}>{this.state.isToggleOn ? 'OFF' : 'ON'}</button>
            </div>
        )
    }
}

export default Events
