import React, { Component } from "react";

export class NewsItem extends Component {
  // constructor(){
  //   //constructor is runned when object instance is created
  //   super(); //consider it as a formality.
  //   console.log('Constructor of NewsItem')
  // }
  render() {
    let {title, description, imageURL, newsURL} =  this.props; //This is destructuring, this.props returns object, we took it as title, description.
    return ( 
      <div className="my-3">
        <div className="card" style={{width: "18rem"}}>
          <img src={imageURL} className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}
            </p>
            <a href={newsURL} className="btn btn-sm btn-primary">
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
