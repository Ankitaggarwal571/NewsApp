import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import NewsPart from './components/NewsPart';
import Footer from './components/Footer';
import {
  BrowserRouter as Router, Route,  Routes } from "react-router-dom";

export default class App extends Component {

  render() {
    return (
      <Router>
        <div>
      <NavBar/>
        <Routes>
          <Route exacpath  path="/"  element={<NewsPart key="cricket" catagory="general"/>}> </Route>
          <Route exacpath path='/business' element={<NewsPart  key="business" catagory="business"/>} />
          <Route exacpath path='/entertainment' element={<NewsPart  key="entertainment" catagory="entertainment"/>} />
          <Route exacpath path='/health' element={<NewsPart  key="health" catagory="health"/>} />
          <Route exacpath path='/science' element={<NewsPart  key="science" catagory="science"/>} />
          <Route exacpath path='/sports' element={<NewsPart  key="sports" catagory="sports"/>} />
          <Route exacpath path='/technology' element={<NewsPart  key="technology" catagory="technology"/>} />
          <Route exacpath path='/cricket' element={<NewsPart  key="cricket" catagory="cricket"/>} />

        </Routes>
      <Footer/>
      </div>
      </Router>
      
    )
  }
}

