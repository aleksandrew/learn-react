import React from 'react';
// import logo from './logo.svg';
import './App.css';

// function App() {
// 	getInitialStase() {
// 		return {
// 			value: 0
// 		}
// 	},

//   return (
//     <h1>Hello</h1>
//   );
// }

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 0
		}

		this.handleIncrement = this.handleIncrement.bind(this);
		this.handleDecrement = this.handleDecrement.bind(this);
	}

	handleIncrement() {
		this.setState({ value: this.state.value + 1 })
	}

	handleDecrement() {
		this.setState({ value: this.state.value - 1 })
	}

	render() {
		return(
			<div>
				<button onClick={this.handleIncrement}>+</button>
				<h1>{this.state.value}</h1>
				<button onClick={this.handleDecrement}>-</button>
			</div>
		)
	}
}

export default App;
