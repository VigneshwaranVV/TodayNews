var React = require('react');
var {Link} = require('react-router');
import mainComponent from './mainComponent.jsx'
export default class NavBar extends React.Component{

render() {
 return(
 <div >
   <nav className="navbar navbar-default navbar-fixed-top navbar-inverse">
     <div className="container-fluid">
       <ul className="nav navbar-nav">
           <li><Link to="/home"> <span className="glyphicon glyphicon-home" aria-hidden="true"></span>Home</Link></li>
           <li><Link to="/view">View Saved News</Link></li>
           <li><Link to="/contact">Contact Us</Link></li>
           <li><Link to="/about">About Us</Link></li>          
            <li><Link to ="/Login">Login</Link></li>
        </ul>

      </div>
     </nav>
   </div>
 );
}
}

