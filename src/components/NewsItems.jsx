import React, { Component } from 'react'

export default class NewsItems extends Component {
  render() {
    const divStyle={
       height:"425px"

    }
    var {title,disrcription, imageUrl , newsUrl , publish}  =this.props
    return (
      <>
        <div className="card" style={divStyle}>
          <img src={imageUrl} className="card-img-top" alt="..." style={{height:"150px"}} />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p style={{height:"100px"}} className="card-text">{disrcription}...</p>
            <p className='card-text'>{new Date(publish).toGMTString()}</p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary mb-2">Read More...</a>
          </div>
        </div>
      </>
    )
  }
}
