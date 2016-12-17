import React from 'React';
import ViewHeadlines from './viewHeadlines.jsx';
export default class NewsData extends React.Component{   

 render(){

var t=this.props.data;
 var newsarr=t.map(function(news){
 console.log(news+"insideeeeeeeeeee NewsData");
 return(
      <ViewHeadlines data={news} >
       </ViewHeadlines>
     );
   }.bind(this));
    return (
      <div className="newsList">
      {newsarr}
   </div>
 );
}
}
