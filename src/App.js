import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Timer
// class Timer extends Component{
//   constructor(props){
//     super(props)
//     this.state = {
//       timer : props.mulai
//     }
//   }

//   componentDidMount(){
//     this.addInterval = setInterval(() => this.tambah(),1000)
//   }

//   componentWillMount(){
//     clearInterval(this.addInterval)
//   }
//   tambah(){
    
//     this.setState((state,prop) => ({
//       timer : parseInt(state.timer)+1
//     }))
//   }

//   render(){
//     return (
//       <div>{this.state.timer } Detik</div>
//     )
//   }
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <Timer mulai = "0"/>  timer*/}
        </header>
        
      </div>
    );
  }
}

export default App;
