import 'file?name=[name].[ext]!../index.html';
import 'file?name=[name].[ext]!../css/style.css';



import React from 'react';
import ReactDOM from 'react-dom';
var {browserHistory,hashHistory, Route, Router, IndexRoute}
  = require('react-router');

import About from './components/About.jsx';
import Home from './components/mainComponent.jsx';
import Contact from './components/Contact.jsx';
import NavBar from './components/NavBar.jsx';
import Login from './components/Login.jsx';
import View from './components/ViewSaved.jsx';
import signup from './components/signup.jsx';
class MainComponent extends React.Component{

render(){

return (
<div>
<NavBar/>
<br/><br/><br/><br/>
    {this.props.children}
</div>
)
}
}
ReactDOM.render(
<Router history={browserHistory}>
             <Route path="/" component={MainComponent} >
	             <Route path="/home" component={Home}/>
	             <Route path="/about" component={About}/>
	             <Route path="/contact" component={Contact}/>
	             <Route path = "/Login" component={Login} />
	             <Route path = "/signup" component={signup} />

	             <Route path="/view" component={View}/>
	             <IndexRoute component={Home} />
</Route>

</Router>,document.getElementById('content'));