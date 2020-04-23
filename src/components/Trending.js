import React,{Component} from 'react';

import axios from 'axios'
import logo from './../Assets/logo.png'
import './Trending.scss'

export default class Trending extends Component{
constructor(props){

    super(props)
}

    render(){
return(

<div>
    <div id="navbar">
    <img src={logo}/>
    <input id="searchbar" type="text" placeholder="Search for products"/>
    </div>
    </div>
)

    }
}