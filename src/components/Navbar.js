
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import News from './News'
import { Link } from 'react-router-dom'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const navbar =() => {
  

    return (
      <div>

        <nav class="navbar navbar-expand-lg bg-body-primary">
  <div class="container-fluid" >
    <a class="navbar-brand" to="#">NewsApp</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent" >
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
 
          <li class="nav-item">
          <Link class="nav-link" to="/business">business</Link></li>
          <li class="nav-item">
          <Link class="nav-link" to="/entertainment">entertainment</Link></li>
          <li class="nav-item">
          <Link class="nav-link" to="/">general </Link></li>
          <li class="nav-item">
          <Link class="nav-link" to="/health">health</Link></li>
          <li class="nav-item">
          <Link class="nav-link" to="/science">science </Link></li>
          <li class="nav-item"> 
          <Link class="nav-link" to="/sports">sports</Link></li>
          <li class="nav-item">
          <Link class="nav-link" to="/technology">technology</Link></li>
  
         

         
      
      </ul>
      
    </div>
  </div>
  <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
</nav>

      </div>
    )

}

export default navbar
