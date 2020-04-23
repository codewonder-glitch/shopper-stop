import React,{Component} from 'react';
import {  BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios'
import logo from './../Assets/logo.png'
import './Trending.scss'
import imgs from '../Image'
import Productinfo from './Productinfo'

export default class Trending extends Component{
constructor(props){
super(props)
this.state={

    vintagedata:[],
    Renderdata:[],
    searchkey:[]
}
}

getdata = (e)=>{
e.preventDefault()
this.setState({searchkey:e.target.value})
}

getdatasubmit=(e)=>{
e.preventDefault()
    axios.get("https://community-etsy.p.rapidapi.com/featured_treasuries/listings/homepage_current?api_key=68k3wa84d1gbn8t4zzh3yikl", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "community-etsy.p.rapidapi.com",
            "x-rapidapi-key": "0c50512463mshf6956ddd7cdbe33p13858djsn036596cdcff1"
        }
    })
    .then(response => {
        let elements='';
        // var searchword='ring';
        console.log(response.data.results);
        this.setState({vintagedata:response.data.results})

   
const filtereddata = response.data.results.filter( (auto) => auto.title.includes(this.state.searchkey))
if ((filtereddata.length>0)){
        console.log(filtereddata);
        Object.keys(filtereddata).map((key, i) => (
            console.log(key)
          ))
        elements=filtereddata.map((vintage,key)=>{
            console.log(key);
           let elem=<div>
            <h2>Description</h2>
            <p>{vintage.description.substring(1,250)}</p>
            <h2>Price</h2>
            <p>{vintage.price}</p> 
            <h2>For more details</h2>     
            <a href={vintage.url} >Click here</a></div>
            return(
<div className="topdiv"> 
                <div className="linkdiv">
                    <Link to={"/info"+key}>
                    <h3>{vintage.title}</h3>
                     <img src={imgs[key]}/>
                     </Link>

<Route exact path={"/info"+key}>
    <Productinfo info={elem} />
</Route>

</div>
<br/>
</div>
)
 })
        this.setState({Renderdata:elements})
    }
else{elements=<h1>Sorry,results not found</h1>
    this.setState({Renderdata:elements})}})
    

    .catch(err => {
        console.log(err);
    });
    
}


    render(){
return(

<div>
    <div id="navbar">
    <img id="logo" src={logo}/>
    <input id="searchbar" type="text" placeholder="Search for products" onChange={this.getdata}/>
    <button type="submit" value="search" onClick={this.getdatasubmit}>Search</button>
    </div>
   <Router>
    
    {this.state.Renderdata}
    </Router>
</div>


)

    }

}