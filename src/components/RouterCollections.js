import React,{Component} from 'react';
import './Style/Trending.scss'
import {  BrowserRouter as Router, Route, Link ,Switch} from "react-router-dom";
import Trending from './Trending'
import FeaturedRouter from './FeatureRender'
import Active from './Active'

export default function MoreCollections(props){
    
return(
     <div>
    <Router>
    <div className="Route">
    <Link to="/" > Active Vintage</Link>
  <Link to="/Featured">Featured Vintage</Link>
   <Link to="/Trending">Trending Vintage</Link>

     {/* <ul classname="linklist">
    <li><Link to="/Active" > Active Vintage</Link></li>
    <li> <Link to="/Featured">Featured Vintage</Link></li>
    <li> <Link to="/Trending">Trending Vintage</Link></li>
    </ul>  */}
    </div>
    <Switch>
 
    <Route exact path="/"> <Active /></Route>  
    <Route exact path="/Trending"><Trending /></Route>  
    <Route exact path="/Featured"><FeaturedRouter  /></Route>  
      
      
    </Switch>
    </Router> 
  </div>  
)
}