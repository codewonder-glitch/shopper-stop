
import React,{Component} from 'react';
import {  BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios'
import './Style/Trending.scss'
import MoreCollections from './RouterCollections'

const Apikey=process.env.REACT_APP_API_KEY


export default class FeaturedRouter extends Component{
constructor(props){
super(props)
this.state={

    vintagedata:[],
    Renderdata:[],
    productinfo:[],
    flag:0,
    id:0
    
}
}

componentDidMount()
{
    this.getdata()
}

getdata=async()=>{
var elements
await axios.get("https://community-etsy.p.rapidapi.com/featured_treasuries/listings/homepage_current?api_key="+Apikey, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "community-etsy.p.rapidapi.com",
            "x-rapidapi-key": "0c50512463mshf6956ddd7cdbe33p13858djsn036596cdcff1"
        }
    })
    .then(response => {
        console.log("In feature ",response.data.results);
        this.setState({vintagedata:response.data.results})
        elements=this.state.vintagedata.map((vintage,key)=>{
          
    return(
    <div>
    <div className="linkdiv">
        
        <h3>Title</h3>
        <p>{vintage.title.substring(0,70)}</p>
        <h3>Price</h3>
        <p>{vintage.price}</p> 
        <h3>For more details</h3>     
        <a href={vintage.url} >Click here</a>
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
<div className="Gridcontainer-link">
    {this.state.Renderdata}
</div>
    )

}

}