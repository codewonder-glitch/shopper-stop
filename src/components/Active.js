import React,{Component} from 'react';
import {  BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios'
import './Style/Trending.scss'
import Activerender from './Activerender'

const Apikey=process.env.REACT_APP_API_KEY

export default class Active extends Component{
constructor(props){
super(props)
this.state={

    vintagedata:[],
    Renderdata:[],
    productinfo:[],
    flag:0,
    id:0,
    ExecuteOnce:false
    
}
}

componentDidMount()
{
    this.getdata()
    
}
 getdata=async()=>{
    
    // if(this.state.ExecuteOnce===false)
    //     window.location='http://localhost:3001/Active'
    //     this.setState({ExecuteOnce:true})
    
var elements
   await axios.get("https://community-etsy.p.rapidapi.com/listings/active?api_key="+Apikey, {
        	"method": "GET",
        	"headers": {
        		"x-rapidapi-host": "community-etsy.p.rapidapi.com",
        		"x-rapidapi-key": "0c50512463mshf6956ddd7cdbe33p13858djsn036596cdcff1"
        	}
    })
    .then(response => {
        
        console.log("In active",response.data.results);
        this.setState({vintagedata:response.data.results})
      
        elements=this.state.vintagedata.map((vintage,key)=>{
          
           return(
<       div>
        <div className="linkdiv">
        
        <h3>Title</h3>
    <p className="title">{vintage.title.substring(0,70)}</p>
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
<div>
   <Activerender info={this.state.Renderdata} />
</div>  

   )

}

}