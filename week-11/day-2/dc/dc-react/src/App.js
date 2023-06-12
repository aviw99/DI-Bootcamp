import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'tachyons';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      languages: [
        { name: "Php", votes: 0 },
        { name: "Python", votes: 0 },
        { name: "JavaScript", votes: 0 },
        { name: "Java", votes: 0 }
      ]
    };
  }
  incrementVote = (lan) => {
    // lan.setState({votes:votes + 1})
    lan.votes++
    this.setState([...this.state.languages])
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="flex flex-wrap justify-center">
            {this.state.languages.map((lan, index) => (
              <div className="flex w-50-l" key={index}>
                <div className="tc bg-light-blue br3 pa3 ma2 dib bw2 shadow-5 purple w-100">
                  <h3>Language: {lan.name}</h3>
                  <button onClick={()=>this.incrementVote(lan)} className="ma2">VOTE</button>
                  <h3>Votes: {lan.votes}</h3>
                </div>
              </div>
            ))}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
