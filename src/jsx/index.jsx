import React from 'react';
import {render} from 'react-dom';
//import axios from 'axios';
//import {closest} from 'element-closest';
//import {classlist} from 'classlist-polyfill';

class App extends React.Component {
	constructor(props){
		super(props);
	}

	render () {
		return <h1>Welcome to React</h1>
	}
}

render(<app/>, document.getElementById('app'));
