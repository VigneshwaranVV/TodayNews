import React from 'React';
import Jumbo2 from './jumbo2.jsx';
export default class NewsData2 extends React.Component{   

 render(){

var t=this.props.data;
 var newsarr=t.map(function(news){
 return(
      <Jumbo2 data={news} >
       </Jumbo2>
     );
   }.bind(this));
    return (
      <div className="newsList">
      {newsarr}
   </div>
 );
}
}
