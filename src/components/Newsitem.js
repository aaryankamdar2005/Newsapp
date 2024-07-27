import React, { Component } from 'react'

const Newsitem =(props)=> {

    let {title,desc,imageUrl,newsUrl,author,date}= props;
    return (
      <div>
        <div class="card" >
  <img src={imageUrl} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <p class="card-text">{desc}</p>
    <a href={newsUrl} target='blank' class="btn btn-primary">Read More</a>
    <p className='
    text-center'>By {author== null ?"Unknown":author} on {new Date(date).toGMTString()}</p>
  </div>
</div>
        
      </div>
    )

}
export default Newsitem