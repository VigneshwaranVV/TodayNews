import React from 'React';
export default class Jumbo2 extends React.Component
{   
constructor()
{
  super();
  this.state={
  "comm":"viki",
  "trigger":" "
  }
}
 Todelete(){
 var r={
 "title":this.props.data.title
 }
$.ajax({
      url:"http://localhost:8342/news/delete",
      type: 'DELETE',
      datatype:'JSON',
      data:r,
      success: function(data)
      {
        window.location.reload();
        console.log("deletion successsssssssssssss");
      }.bind(this),
      error:function(err)
      {
        console.log(err);
      }.bind(this)
    });
 }

 Toupdate(){
   var r={
     "title":this.props.data.title,
     "comments":this.state.comm
   }
  $.ajax({
        url:"http://localhost:8342/news/update",
        type: 'PUT',
        datatype:'JSON',
        data:r,
        success: function(data)
        {
          window.location.reload();
          console.log("updation successsssssssssssss");
        }.bind(this),
        error:function(err)
        {
          console.log(err);
        }.bind(this)
      });
 }
getcommenttext(com){
  this.setState({"comm":com.target.value});
}
render(){
  return(
      <div className = "jumbotron col-xs-12">
        <div className = "container col-xs-12">
            <div className="col-xs-6" >
              <a id="click" href={this.props.data.url} className="col-xs-12"> <img className="thumbnail col-xs-12"  id="poster" src={this.props.data.urltoImage} width="500" height="400" alt="image not available"/></a>
            </div>
            <div className="col-xs-6">
                <a id="click" href={this.props.data.url} ><h4>{this.props.data.title}</h4></a>
                <ul className='list-group'>
                  <li className='list-group-item'><b>Description :</b>{this.props.data.description}</li>
                </ul>
                <div className='col-xs-2'>
                   <button type="button" className="btn btn-info btn-lg" onClick={this.Todelete.bind(this)}  title="click to delete">Delete</button>
                </div>
               
                <div className="container col-xs-6">
                    <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Update Comment</button>
                    <div className="modal fade" id="myModal" role="dialog">
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                              <button type="button" className="close" data-dismiss="modal">&times;</button>
                              <h4 className="modal-title">Update Comment</h4>
                          </div>
                          <div className="modal-body">
                              <textarea className="form-control custom-control" rows="3" onChange={this.getcommenttext.bind(this)}  placeholder="Enter Comments to update..." ></textarea> 
                          </div>
                          <div className="modal-footer">
                              <button type="button" className="btn btn-primary" onClick={this.Toupdate.bind(this)}  title="click to update commend">Comment</button>
                              <button type="button" className="btn btn-default" data-dismiss="modal">Close </button>
                          </div>
                        </div>      
                      </div>
                    </div>  
                </div>
             </div>
        </div>
        
      </div> 
      
	    )

}
}


