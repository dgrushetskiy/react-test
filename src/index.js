import React from 'react';
import ReactDOM from 'react-dom';

//const el = <h1>Hello World!!!</h1>;

//const el = React.createElement('h1',null,'Hello World');

const TodoList = () => {
	return (
		<ul>
			<li>Learn React</li>
			<li>Build Awesome App</li>
		</ul>
	);
};

const AppHeader = () => {
	return (
		<h1>My Todo List</h1>
	);
};

const SearchPanel = () =>{
		return (
		  <input placeholder="search" />
		);
};

const App = () => {
	return(
	<div>
		<AppHeader/>
		<SearchPanel/>
		<TodoList/>
	</div>
	);
};
//const el = (
//	<App/>
//);

ReactDOM.render(<App/>, document.getElementById('root'));