import React, { Component } from 'react'
import {Link} from 'react-router-dom'



export default class NavBar extends Component {
  render() {
    return (
      <>
      <nav className="navbar navbar-expand-lg bg-primary " data-bs-theme="dark">
        <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
      <ul className='navbar-nav'>
      <li className='nav-item'> <Link className="nav-link" aria-current="page" to='/'>Home</Link> </li>
      <li className='nav-item'> <Link className="nav-link"  to='/cricket'>Cricket</Link> </li>
      <li className='nav-item'> <Link className="nav-link" to='/business'> Business</Link>  </li>
      <li className='nav-item'> <Link className="nav-link" to='/entertainment'> Entertainment</Link></li>
      <li className='nav-item'> <Link className="nav-link" to='/health'> Health</Link> </li>
      <li className='nav-item'> <Link className="nav-link" to='/science'> Science</Link> </li>
      <li className='nav-item'> <Link className="nav-link" to='/sports'> Sports</Link> </li>
      <li className='nav-item'> <Link className="nav-link" to='/technology'> Technology</Link></li>
       </ul>
      </div>
     
    </div>
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-info text-white border-white" type="submit">Search</button>
    </form>
  </div>
        </nav>
      </>
    )
  }
}


