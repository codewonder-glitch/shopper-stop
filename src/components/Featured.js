import React,{Component} from 'react';
import {  BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios'
import logo from './../Assets/logo.png'
import './Trending.scss'
import imgs from '../Image'
import Productinfo from './Productinfo'
import Reactrouter from './Router'

export default class Featured extends Component{
constructor(props){
super(props)
this.state={

    vintagedata:[],
    Renderdata:[],
    productinfo:[],
    searchkey:[],
    flag:0,
    id:0
    
}
}




setflag=(e)=>{
e.preventDefault()
    this.setState({flag:1})
    this.setState({id:e.target.name})
    console.log(this.state.Renderdata)
    console.log(this.state.productinfo)
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
        let elements=[], itr=0,elem=[]
        // var searchword='ring';
        console.log(response.data.results);
        this.setState({vintagedata:response.data.results})

   
const filtereddata = response.data.results.filter( (vin) => vin.title.includes(this.state.searchkey))
if ((filtereddata.length>0)){
    let arr=[];
        console.log(filtereddata);
      Object.keys(filtereddata).forEach(function(keys,i){
            console.log("key value is",keys)
            arr[i]=keys
       })
        elements=filtereddata.map((vintage,key)=>{
          
            console.log(key);
            
         
            return(

                <div className="linkdiv">
                  
            <h3>{vintage.title}</h3>
                     <img name={key} onClick={this.setflag} src={imgs[arr[itr]]}/>
                    
                     {itr++}
            </div>

)
 })
 this.setState({Renderdata:elements})


 elem=filtereddata.map((vintage,key)=>{
    return(<div>
    <h2>Description</h2>
    <p>{vintage.description.substring(1,250)}</p>
    <h2>Price</h2>
    <p>{vintage.price}</p> 
    <h2>For more details</h2>     
    <a href={vintage.url} >Click here</a></div>)})
        
        this.setState({productinfo:elem})   
    }
else{elements=<h1>Sorry,results not found</h1>
    this.setState({Renderdata:elements})}})
    

    .catch(err => {
        console.log(err);
    });
    
}

backbtn=(e)=>{
e.preventDefault()
    this.setState({flag:0}) 
}


    render(){
return(

    

    <div>
    <div id="navbar">
    <img id="logo" src={logo}/>
    {this.state.flag===0?
  
   <div>
    <input id="searchbar" type="text" placeholder="Search for products" onChange={this.getdata}/>
<button type="submit" value="search" onClick={this.getdatasubmit}>Search</button>
   
    </div> :null
    }
    </div>
    {this.state.flag===0?
    <div id="Gridcontainer">
   {this.state.Renderdata}
     </div>:<div><Productinfo name={this.state.Renderdata} info={this.state.productinfo} id={this.state.id}/></div>
    }

{this.state.flag===0?
   <div><Reactrouter /></div>:null}
  
    
   


    <button id="backbtn" onClick={this.backbtn} style={{visibility: this.state.flag===1 ? 'visible' : 'hidden' }} >Back</button>
</div>




)

    }

}