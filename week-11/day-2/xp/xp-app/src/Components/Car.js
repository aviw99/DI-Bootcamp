import React from 'react';
import Garage from './Garage';

class Car extends React.Component {
    constructor(props) {
        super()
        this.state = {
            color: 'matte-black'
        }
    }
    render(){
        const carStyle = {
            width: '200px'
        }
        return(
            <header>
                <h3>This car is a {this.state.color} {this.props.name} {this.props.model}</h3>
                <img style={carStyle} src='https://diecastmasters.com/wp-content/uploads/2020/04/61005-6-_decal-sample_20190908_8-scaled.jpg'/>
                <Garage size='small'/>
            </header>
        )
    }
}

export default Car