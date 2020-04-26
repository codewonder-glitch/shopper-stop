import React,{Component} from 'react';
import {  BrowserRouter as Router, Route, Link ,Switch} from "react-router-dom";
import axios from 'axios'
import logo from './../Assets/logo.png'
import './Style/Trending.scss'
import imgs from '../Image'
import Productinfo from './Productinfo'
import Trending from './Trending'
import FeaturedRouter from './FeatureRender'
import Active from './Active'
import jewelbox from './../Assets/Pill-Box.gif'



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
   showhomeimg:true,
    child:false
    
}
}


setflag=(e)=>{
e.preventDefault()
    this.setState({flag:1})
    this.setState({id:e.target.name})
    
}

getdata = (e)=>{
e.preventDefault()

this.setState({searchkey:e.target.value})
}

getdatasubmit=(e)=>{
e.preventDefault()
this.setState({showhomeimg:false})
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
    //   Object.keys(imgs).map((keys,i)=>{
    //         console.log("key value is",keys)
    //         arr.push(keys)
    //    })
    // for (let [key, value] of Object.entries(filtereddata)) {
    //     console.log(`${key}: ${value}`);
    //     console.log("key value is",key)
    //         arr.push(key)
    //   }

   filtereddata.map((vintage,key)=>{
   imgs.map((img,i)=>{
                console.log("key value is",img.name)
                if(vintage.user_id==img.name)
                arr.push(img.image)
           })
        }
        
   )   
        elements=filtereddata.map((vintage,key)=>{    
        return(

            <div className="linkdiv">
                <img name={key} onClick={this.setflag} src={arr[key]}/>
            <h4>{vintage.title.substring(0,50)}</h4>
            
         
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

    handleChangePage=(e)=>{
    e.preventDefault()
//    // if(this.state.Executeonce===true)
//     window.location = 'http://localhost:3001/';
//     this.setState({Executeonce:true})
    }

    handleChildClick=(e)=>{
    console.log("Are u coming here")
    this.setState({child:true})
    }

    render(){
    return(
        <React.Fragment>
    <div className="mainContainer">
    <div id="navbar">
    <img id="logo" src={logo}/>
    {this.state.flag===0 &&
    <div>
    <input id="searchbar" type="text" placeholder="Search for products" onChange={this.getdata} onFocus={this.handleChangePage}/>
    <button type="submit" value="search" onClick={this.getdatasubmit}>Search</button>
    </div> 
    }
    </div>
    {this.state.showhomeimg &&
    <div className="Homepage">
    <h1>Custom Vintage Collections Everyday</h1>
    
    <img id="logo" src={jewelbox}/>
    </div>}
    {this.state.flag===0 ?
    <div id="Gridcontainer">
   {this.state.Renderdata}
     </div>:<div><Productinfo name={this.state.Renderdata} info={this.state.productinfo} id={this.state.id}/></div>
    }

    
    {/* <div>
    <Router>
    <div className="Route">
    <Link to="/Active" > Active Vintage</Link>
  <Link to="/Featured">Featured Vintage</Link>
   <Link to="/Trending">Trending Vintage</Link>

    {/* <ul classname="linklist">
    <li><Link to="/Active" > Active Vintage</Link></li>
    <li> <Link to="/Featured">Featured Vintage</Link></li>
    <li> <Link to="/Trending">Trending Vintage</Link></li>
    </ul> */}
    {/* </div>
    <Switch>
 
    <Route exact path="/Active"> <Active onClick={this.handleChildClick.bind(this)} /></Route>  
    <Route exact path="/Trending"><Trending /></Route>  
    <Route exact path="/Featured"><FeaturedRouter  /></Route>  
      
      
    </Switch>
    </Router> 
  </div>  */}
  <button id="backbtn" onClick={this.backbtn} style={{visibility: this.state.flag===1 ? 'visible' : 'hidden' }} >Back</button>
</div>
</React.Fragment>
)
 }

}