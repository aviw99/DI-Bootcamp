import React from "react";

class Phone extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            brand: "Samsung ",
            model: "Galaxy S20 ",
            color: "black ",
            year: 2020
        }
    }
    changeColor = () => {
        if(this.state.color === 'black '){
            this.setState({color: "blue "})
        }else{
            this.setState({color: "black "})
        }
    }
    render(){
        return(
            <div>
                <h5>My phone is a {this.state.brand}</h5>
                <h6>It is a {this.state.color} {this.state.model} from {this.state.year}</h6>
                <button onClick={this.changeColor}>change color</button>
            </div>
        )
    }
}

export default Phone