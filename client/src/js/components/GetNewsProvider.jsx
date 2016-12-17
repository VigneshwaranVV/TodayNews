  import React from 'react';
  export default  class ChildComponent extends React.Component{

    constructor()
    {
    super();
    this.getnewsproviders=this.getnewsproviders.bind(this);
    this.state={
    "newstitle":" "
    }
  }

  gettext(e){
    this.setState({"newstitle":e.target.value});
    console.log(this.state.newstitle+"[[[[[[[[");
  }

  getnewsproviders(){
    var source =this.state.newstitle;
    $.ajax({
      url:"https://newsapi.org/v1/articles?source="+ source + "&sortBy=latest&apiKey=24312351b27547219637086bce033b50",
      type: 'GET',
      dataType:'JSON',
      success: function(data1)
      {
       this.props.getnews(data1.articles);
      }.bind(this),
      error:function(err)
      {
        console.log(err);
      }.bind(this)
    });
  }
  render(){
    return(
      <div className="search2">

        <input className="form-control input-lg" id="newsname" list="newsSource" type="text"  placeholder="nothing" onChange={this.gettext.bind(this)}></input>
        <datalist id="newsSource">
          <option value="ars-technica"/>
          <option value="associated-press"/>
          <option value="bild"/>
          <option value="business-insider"/>
          <option value="the-hindu"/>
        </datalist><br/>

        <div className="search">
         <button type="button" className="btn btn-success" onClick={this.getnewsproviders.bind(this)}>Click me to GET news</button>
        </div>
      </div>

    )
  }



  }