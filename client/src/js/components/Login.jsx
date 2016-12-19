import React from 'react';
export default class Login extends React.Component{
  constructor(){
  	super();
    this.state={
      "username":"default",
      password:"default"
    }
  }
user(euser){
  this.setState({"username":euser.target.value});
  console.log(this.state.username);
}
pass(epass){
  this.setState({password:epass.target.value});
}
  check(){
  var login={
    "username":this.state.username,
    "password":this.state.password
  }
    console.log("login clicked");
    $.ajax({
      url:"http://localhost:8342/users/add",
      type: 'POST',
      data : login,
      success: function(data)
      {
        console.log("inside success");
      },
      error: function(err)
      {
        console.log(err);
      }
    });
  }

render(){
 return (
      <div className="login-card">
         <div>
         <h1>Log-in</h1><br />
         </div>
      <form>
        <input type="text" name="user" placeholder="Username" onChange={this.user.bind(this)}/><br/>
        <input type="password" name="pass" placeholder="Password" onChange={this.pass.bind(this)}/><br/>
        <input type="submit" name="register" className="login login-submit" value="Register" onClick={this.check.bind(this)} />
      </form>
      
    </div>

	)
	}
}