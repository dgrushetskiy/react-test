import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchPanel';
import TodoList from './todo/TodoList';

//const el = <h1>Hello World!!!</h1>;

//const el = React.createElement('h1',null,'Hello World');

const App = () => {
	
	const isLoggedIn = true;
	const loginBox = <span>Log in please</span>;
	const welcomeBox = <span>Welcome Back</span>
	
	return(
	<div>
		<span>{(new Date()).toString()}</span>
			{isLoggedIn ? welcomeBox : loginBox}
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