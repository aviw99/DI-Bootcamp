import React from "react";
import Form from "./components/Form";
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:'',
        }
    }
    componentDidMount = async() => {
        const res = await fetch('http://localhost:3000/api/hello');
        const data = await res.text()
        this.setState({data:data})
    }
    // componentDidMount = async() => {
    //     const res = await fetch('http://localhost:3000/api/world');
    //     const data = await res.text()
    //     this.setState({postData:data})
    // }

    render() {
        return (
            <div className="App">
                <p>week-11/day-4/daily-challenge</p>
                <h3>{this.state.data}</h3>
                {/*<h3>{this.state.postData}</h3>*/}
                <header className="App-header">
                    <Form />
                </header>
            </div>
        );
    }
}

export default App;
