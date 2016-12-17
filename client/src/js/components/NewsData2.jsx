import React from 'React';
import Jumbo from './jumbo2.jsx';
export default class NewsData2 extends React.Component{   

 render(){

var t=this.props.data;
 var newsarr=t.map(function(news){
 console.log(news+"insideeeeeeeeeee NewsData");
 return(
      <Jumbo data={news} >
       </Jumbo>
     );
   }.bind(this));
    return (
      <div className="newsList">
      {newsarr}
   </div>
 );
}
}
