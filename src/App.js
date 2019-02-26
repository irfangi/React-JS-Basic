import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { stat } from 'fs';

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

// handle toggle
// class Toggle extends Component{
//   constructor(props){
//     super(props)
//     this.state = {
//       kondisi : true
//     }
//     this.toggleChange = this.toggleChange.bind(this)
//   }
//   toggleChange(){
//     this.setState(state=>({
//       kondisi : !state.kondisi
//     }))
//   }
//   render(){
//     return(
//       <button onClick = {this.toggleChange}>
//         {this.state.kondisi ? 'ON' : 'OFF'}
//         <p>
//           lampu {this.state.kondisi ? 'menyala' : 'mati'}
//         </p>
//       </button>
//     )
//   }
// }

// class List extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			list: props
// 		};
// 		console.log(this.state.list);
// 	}
// 	render() {
// 		return <ul>ff</ul>;
// 	}
// }
// function List(props) {
// 	return <ul>{props.list.map((item, index) => <li key={index}>{item}</li>)}</ul>;
// }

class List extends Component {
	render() {
		return (
			// <React.Fragment>
			<ul>{this.props.list.map((item, index) => <li key={index}>{item}</li>)}</ul>
			/* <React.Fragment/> */
		);
	}
}

class App extends Component {
	//todolist
	constructor(props) {
		super(props);
		this.state = {
			inputan: '',
			list: []
		};
	}
	submit = (param) => {
		param.preventDefault();
		this.setState({
			list: [ ...this.state.list, this.state.inputan ],
			inputan: ''
		});
	};
	change = (param) => {
		this.setState({
			inputan: param.target.value
		});
	};
	render() {
		return (
			<div className="App">
				{/* <Toggle/> */}
				{/* <header className="App-header"> */}
				{/* <img src={logo} className="App-logo" alt="logo" /> */}
				{/* <Timer mulai = "0"/>  timer*/}
				{/* </header> */}
				<form onSubmit={this.submit}>
					<input type="text" value={this.state.inputan} onChange={this.change} />
					<button>Add</button>
				</form>
				<List list={this.state.list} />
			</div>
		);
	}
}

export default App;
