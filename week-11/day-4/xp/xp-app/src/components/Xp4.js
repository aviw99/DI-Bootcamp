import React from "react";

class Xp4 extends React.Component{
    constructor(){
        super()
        this.state = {
            result: null
        }
    }

     componentDidMount = async() => {
        const result = await fetch('https://webhook.site/7c0cf944-92ef-49f7-af58-be4d21e35523 ',{
            method: 'post',
            mode: 'no-cors',
            headers: {
              'Accept': 'application/json',
              'Content-type': 'application/json' 
            },
            body:JSON.stringify({
                key1: 'myusername',
                email: 'mymail@gmail.com',
                name: 'Isaac',
                lastname: 'Doe',
                age: 27
            })
        })
        this.setState({result})
    }    
    logData = () => {
        console.log(this.state.result);
    }
    render(){
        return(
            <>
                <button onClick={this.logData}>log data</button>
            </>
        )
    }
}

export default Xp4