import React,{Component} from 'react';
import {  BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios'
import logo from './../Assets/logo.png'
import './Style/Trending.scss'
import imgs from '../Image'
import Productinfo from './Productinfo'
import Trending from './Trending'
import FeaturedRouter from './FeatureRender'
import Active from './Active'



export default class Featured extends Component{
constructor(props){
super(props)
this.state={

    vintagedata:[],
    Renderdata:[],
    productinfo:[],
    searchkey:[],
    flag:0,
    submitbtn:false,
    id:0,
    Executeonce:false,
    child:false
    
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
this.setState({Executeonce:true})
this.setState({searchkey:e.target.value})
}

getdatasubmit=(e)=>{
e.preventDefault()
this.setState({submitbtn:true})
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
    var arr=[];
        console.log(filtereddata);
    //   Object.keys(filtereddata).map((keys,i)=>{
    //         console.log("key value is",keys)
    //         arr.push(keys)
    //    })
    // for (let [key, value] of Object.entries(filtereddata)) {
    //     console.log(`${key}: ${value}`);
    //     console.log("key value is",key)
    //         arr.push(key)
    //   }
    function isCherries(fruit) { 
        return fruit.key === this.state.vintagedata.user_id;
      }
      
      console.log(imgs.find(isCherries)); 
        var keys = Object.keys(filtereddata);
        console.log("key value is",keys)
        arr.push(0)
        elements=filtereddata.map((vintage,key)=>{    
        return(

            <div className="linkdiv">
            <h3>{vintage.title}</h3>
            <img name={key} onClick={this.setflag} src={imgs[arr[itr]] }/>
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
    this.setState({Renderdata:elements})

}}

    )
    
    
    .catch(err => {
        console.log(err);
    });
    
}

backbtn=(e)=>{
e.preventDefault()
    this.setState({flag:0}) 
    this.setState({submitbtn:false}) 
}

    Routingflag=(e)=>{
    e.preventDefault()
    }

    handleChangePage=(e)=>{
    e.preventDefault()
    if(this.state.Executeonce===true)
    window.location = 'http://localhost:3001/';
    this.setState({Executeonce:true})
    }

    handleChildClick=(e)=>{
    console.log("Are u coming here")
    this.setState({child:true})
    }

    render(){
    return(
    <div>
    <div id="navbar">
    <img id="logo" src={logo}/>
    {this.state.flag===0?
    <div>
    <input id="searchbar" type="text" placeholder="Search for products" onChange={this.getdata} onFocus={this.handleChangePage}/>
    <button type="submit" value="search" onClick={this.getdatasubmit}>Search</button>
    </div> :null
    }
    </div>
    {this.state.flag===0 || this.state.child===false?
    <div id="Gridcontainer">
   {this.state.Renderdata}
     </div>:<div><Productinfo name={this.state.Renderdata} info={this.state.productinfo} id={this.state.id}/></div>
    }

    { this.state.submitbtn===false?
    <div>
       
    <Router>
    <div className="Route">
    <ul classname="linklist">
    <li><Link to="/Active" > Active Vintage</Link></li>
    <li> <Link to="/Featured">Featured Vintage</Link></li>
    <li> <Link to="/Trending">Trending Vintage</Link></li>
    </ul>
    </div>
    <switch>
 
    <Route exact path="/Active"> <Active onClick={this.handleChildClick.bind(this)} /></Route>  
    <Route exact path="/Trending"><Trending /></Route>  
    <Route exact path="/Featured"><FeaturedRouter  /></Route>  
      
      
    </switch>
    </Router>
  </div>:null}
  <button id="backbtn" onClick={this.backbtn} style={{visibility: this.state.flag===1 ? 'visible' : 'hidden' }} >Back</button>
</div>
)
 }

}