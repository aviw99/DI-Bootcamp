import React from "react";

class TestClass extends React.Component{
    constructor(props){
        super(props)
        console.log(props);
        this.state = {
            name: props.name
        }
    }
    render(){
        console.log(this.props);
        return(
            <>
                <h1>test class component</h1>
            </>
        )
    }
}

export default TestClass