import React from 'react';
import ReactDOM from 'react-dom';
import GetNewsProvider from './GetNewsProvider.jsx'
import NewsData from './NewsData.jsx'
 export default class Maincomponent extends React.Component{
 constructor(){
 super();
  this.state = {
         "data":[]
      }
}
childchange(a){
 	this.setState({"data":a});
 }



render(){
	return(
	<div>
		<GetNewsProvider   getnews={this.childchange.bind(this)}/>
		<NewsData data={this.state.data}/>		
	</div>

	)
}
 }