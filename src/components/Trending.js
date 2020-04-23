import React,{Component} from 'react';
import {  BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios'
import logo from './../Assets/logo.png'
import './Trending.scss'
import imgs from '../Image'

export default class Trending extends Component{
constructor(props){
super(props)
this.state={

    vintagedata:[],
    Renderdata:[],
    searchkey:[]
}
}



findResults(){

    
        // var searchUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`;
        // fetch(searchUrl)
        // .then(response => {
        // return response.json();
        // })
        // .then(jsonData => {
        // console.log(jsonData.meals);
        // });
        // };

        axios.get("https://community-etsy.p.rapidapi.com/featured_treasuries/listings/homepage_current?api_key=68k3wa84d1gbn8t4zzh3yikl", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "community-etsy.p.rapidapi.com",
            "x-rapidapi-key": "0c50512463mshf6956ddd7cdbe33p13858djsn036596cdcff1"
        }
    }).then(response => {
console.log("in filter"+response.data);
    }).catch(err => {
        console.log(err);
    });
}

getdata = (e)=>{
e.preventDefault()
this.setState({searchkey:e.target.value})
}

getdatasubmit=(e)=>{
e.preventDefault()
    console.log(imgs[0])

    axios.get("https://community-etsy.p.rapidapi.com/featured_treasuries/listings/homepage_current?api_key=68k3wa84d1gbn8t4zzh3yikl", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "community-etsy.p.rapidapi.com",
            "x-rapidapi-key": "0c50512463mshf6956ddd7cdbe33p13858djsn036596cdcff1"
        }
    })
    .then(response => {
        // var searchword='ring';
        console.log(response.data.results);
        this.setState({vintagedata:response.data.results})

        const filtereddata = response.data.results.filter( (auto) => auto.title.includes(this.state.searchkey))
        console.log(filtereddata);
        Object.keys(filtereddata).map((key, i) => (
            console.log(key)
          ))
        var i=0;
        let elements=filtereddata.map(vintage=>{
            i++;
           
            // var arr=vintage.url.split(',')
            // for(let i=0;i<arr.length;i++)
            // {

            // }
            return(
<div>
                <div className="linkdiv">
                    <Link to="/info">
                    <h3>{vintage.title}</h3>
                     <img src={imgs[i]}/>
                     </Link>

<Route exact path="/info">
<a href={vintage.url} >Link</a></Route>

</div>
<br />
</div>
)
 })
        this.setState({Renderdata:elements})
    })
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
Productinfo=()=>{

}