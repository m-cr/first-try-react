import React, { Component } from 'react';
import ReactDOM from 'react-dom';

var root = document.getElementById('root');

const Header = ()=> <h1>MyApp</h1> ;
const TodosList = ({todos})=> {
	const lis = todos.map( (todo, idx) => <li key={idx}>{todo}</li> );
	return (
		<ul>
			{ lis }
		</ul>
	)
};

class App extends Component{
	constructor(){
		super();
		const todos = ['Foo', 'Bar'];
		this.state = { todos };
	}
	render(){
		return (
			<div>
			<Header />
			<TodosList todos={ this.state.todos } />
			</div>
		)
	}
};

ReactDOM.render(<App />, root);