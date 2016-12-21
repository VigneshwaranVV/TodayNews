var React = require('react');
var {Link} = require('react-router');
var {browserHistory}=require('react-router');
import mainComponent from './mainComponent.jsx'
export default class NavBar extends React.Component{

loginhandle(){
if(true)
  return <li><Link to ="/Login">Login</Link></li>
else
  return <li><Link to ="/Login">Logout</Link></li>

}
logout(){
console.log("logout");
   $.ajax({
      url:"http://localhost:8342/users/logout",
      type: 'GET',
      success: function(data){
      browserHistory.push('/login');
      console.log("allow logout");
       }.bind(this),
      error:function(err)
      {
        console.log(err+"-00000000----");
      }.bind(this)
    });

}






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
           <li><button onClick={this.logout}>Logout</button></li> 
           </ul>
            <ul className="nav navbar-nav navbar-right"> 
           <li ><Link to="/signup">Register</Link></li>          
          {this.loginhandle()}
        </ul>

      </div>
     </nav>
   </div>
 );
}
}

