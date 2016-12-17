import React from 'react';
export default class Login extends React.Component{
  constructor(){
  	super();
  }

  check(){
  var login={
    "username":"viki",
    "password":"waran"
  }
    console.log("login clicked");
    $.ajax({
      url:"http://localhost:8342/users/add",
      type: 'POST',
      data : login,
      success: function(data)
      {
        console.log("inside success");
      }.bind(this),
      error: function(err)
      {
        console.log(err);
      }.bind(this)
    });
  }







	render(){
 return (
      <div className="login-card">
         <div>
         <h1>Log-in</h1><br />
         </div>
      <form>
        <input type="text" name="user" placeholder="Username" /><br/>
        <input type="password" name="pass" placeholder="Password" /><br/>
        <input type="submit" name="login" className="login login-submit" value="Submit" onClick={this.check} />
      </form>
      
    </div>

	)
	}
}