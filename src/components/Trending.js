import React,{Component} from 'react';
import {  BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios'
import './Trending.scss'




export default class Trending extends Component{
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




getdata=()=>{
var elements
    axios.get("https://community-etsy.p.rapidapi.com/listings/active?api_key=68k3wa84d1gbn8t4zzh3yikl", {
        	"method": "GET",
        	"headers": {
        		"x-rapidapi-host": "community-etsy.p.rapidapi.com",
        		"x-rapidapi-key": "0c50512463mshf6956ddd7cdbe33p13858djsn036596cdcff1"
        	}
        })
    .then(response => {
        
        console.log(response.data.results);
        this.setState({vintagedata:response.data.results})
      
        elements=response.data.results.map((vintage,key)=>{
          
           return(
<div>
        <div className="linkdiv">
        
        <h2>Description</h2>
    <p>{vintage.description.substring(1,250)}</p>
    <h2>Price</h2>
    <p>{vintage.price}</p> 
    <h2>For more details</h2>     
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
<div id="Gridcontainer">
    {this.state.Renderdata}
</div>
    

   




)

}

}