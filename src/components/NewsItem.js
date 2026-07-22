import React, { Component } from "react";

export class NewsItem extends Component {
  // constructor(){
  //   //constructor is runned when object instance is created
  //   super(); //consider it as a formality.
  //   console.log('Constructor of NewsItem')
  // }
  render() {
    let {title, description, imageURL, newsURL, author, date, source} =  this.props; //This is destructuring, this.props returns object, we took it as title, description.
    return ( 
      <div className="my-3">
        <div className="card" style={{width: "18rem"}}>
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-success" style={{left: "90%", zIndex:1}}>{source}</span>
          <img src={imageURL || "https://cdn.mos.cms.futurecdn.net/xkj7G3puAgdsqBWQZZmjRM-2560-80.jpg"} className="card-img-top" alt="..." onError={(e)=>{e.target.src="https://cdn.mos.cms.futurecdn.net/xkj7G3puAgdsqBWQZZmjRM-2560-80.jpg"}}></img>
          {/* If imageURL null - used a default image */}
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}
            </p>
            <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
            <a href={newsURL} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
//If Nem had export default in the above definition - Nem wouldn't need to write anything in here.
