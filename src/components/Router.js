import React,{Component} from 'react';
import {  BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios'
import logo from './../Assets/logo.png'
import './Trending.scss'
import Active from './Active'
import Trending from './Trending'
export default function Reactrouter(){
    
return(
    <div>
    <Router>

        <Link to="/Active">Active Vintage</Link>
        <Link to="/Trending">Trending Vintage</Link>
    <switch>
        <Route exact path="/Active"><Active /></Route>  
        <Route exact path="/Trending"><Trending /></Route>  
        
      </switch>
      </Router>
    </div>
)
}