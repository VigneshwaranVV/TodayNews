import React from 'React';
export default class viewHeadlines extends React.Component
{   
  constructor()
  {
    super();
    this.state={
    "comm":"viki"
    }
  }
  Tosave(){
   $("button").click(function(){
        $(this).hide();
    });
    $.ajax({
          url:"http://localhost:8342/news/add",
          type: 'POST',
          datatype:'JSON',
          data:this.props.data,
          success: function(data)
          {           
            console.log("added successsssssssssssss");
          }.bind(this),
          error:function(err)
          {
            console.log(err);
          }.bind(this)
        });
  }
  render(){
    return(
        <div className = "jumbotron row">
          <div className = "container col-xs-12">
            <div className="col-xs-6" >
              <a id="click" href={this.props.data.url} className="col-xs-12"> <img className="thumbnail col-xs-12"  id="poster" src={this.props.data.urlToImage}  alt="image not available"/></a>
            </div>
            <div className="col-xs-6">
              <a id="click" href={this.props.data.url} ><h4>{this.props.data.title}</h4></a>
                <ul className='list-group'>
                    <li className='list-group-item'><b>Description :</b>{this.props.data.description}</li>
                </ul>
              <button type="button" className="btn btn-primary" onClick={this.Tosave.bind(this)} data-toggle="tooltip" data-placement="top" title="click to save">Save</button>
           </div>
          </div>
        </div> 
        
  	    )

  }
}


