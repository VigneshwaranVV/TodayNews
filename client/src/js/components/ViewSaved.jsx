import React from 'react';
import NewsData from './NewsData2.jsx';
export default class ViewSaved extends React.Component{
constructor(){
	super();
	this.state={
	"Newsarray":[]

	}
	this.viewcall();
}
	viewcall(){
	 $.ajax({
      url:"http://localhost:8342/news/",
      type: 'GET',
      dataType:'JSON',
      success: function(data1)
      {
        this.setState({"Newsarray":data1});

      }.bind(this),
      error:function(err)
      {
        console.log(err);
      }.bind(this)
    });
	}
	render(){
	return(
		<NewsData data={this.state.Newsarray} />
	)
	}
}