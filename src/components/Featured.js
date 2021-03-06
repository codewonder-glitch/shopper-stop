import React,{Component} from 'react';

import axios from 'axios'
import logo from './../Assets/logo.png'
import './Style/Trending.scss'
import imgs from '../Image'
import Productinfo from './Productinfo'
import jewelbox from './../Assets/Pill-Box.gif'
import MoreCollections from './RouterCollections'

const Apikey=process.env.REACT_APP_API_KEY

export default class Featured extends Component{
constructor(props){
super(props)
this.state={

    vintagedata:[],
    Renderdata:[],
    productinfo:[],
    searchkey:[],
    showproduct:false,
    submitbtn:false,
    id:0,
    showhomeimg:true,
    showcategories:false,
    btnText:"Categories"
    
}
}


setflag=(e)=>{
e.preventDefault()
    this.setState({showproduct:true})
    this.setState({id:e.target.name})
    
}

getdata = (e)=>{
e.preventDefault()

this.setState({searchkey:e.target.value})
}
 // Fetching data from the server
getdatasubmit=async(e)=>{
e.preventDefault()
this.setState({showhomeimg:false})
this.setState({submitbtn:true})
    await axios.get("https://community-etsy.p.rapidapi.com/featured_treasuries/listings/homepage_current?api_key="+Apikey, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "community-etsy.p.rapidapi.com",
            "x-rapidapi-key": "0c50512463mshf6956ddd7cdbe33p13858djsn036596cdcff1"
        }
    })
    .then(response => {
        let elements=[], itr=0,elem=[]
        console.log(response.data.results);
        this.setState({vintagedata:response.data.results})
        // result is searched with the keyword entered
   
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

    // Fetching array element one by one assigning required values to state variable 
   filtereddata.map((vintage,key)=>{
   imgs.map((img,i)=>{
                console.log("key value is",img.name)
                if(vintage.user_id==img.name)
                arr.push(img.image)
           })
        }
        
   )   
   // Assigning Product info 
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
    <p>{vintage.description.substring(0,250)}</p>
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
    this.setState({showproduct:false}) 
    this.setState({submitbtn:false}) 
}
handleCategories=(e)=>{
    e.preventDefault()
    if(this.state.btnText=="Categories")
{
        this.setState({showcategories:true}) 
        this.setState({btnText:"Home"}) 
        this.setState({showhomeimg:false})
       
}else{
    this.setState({showcategories:false}) 
   
    this.setState({btnText:"Categories"}) 
}
        // this.style.value="Home"
   
    }

    handleChangePage=(e)=>{
    e.preventDefault()

    }

    render(){
    return(
        <React.Fragment>
    <div className="mainContainer">
    <div id="navbar">
    <img id="logo" src={logo}/>
    {/* Did hide the search bar when the image is clicked or more categories button is clicked */}
    { (this.state.showcategories===false && this.state.showproduct===false) &&
    <div>
    <input id="searchbar" type="text" placeholder="Search for products" onChange={this.getdata} onFocus={this.handleChangePage}/>
    <button type="submit" value="search" onClick={this.getdatasubmit}>Search</button>
    </div> 
    }

    {/* More categories is hidden when product info is displayed */}
 {  this.state.showproduct===false &&
    <button id="morecategories" type="submit" value="Categories" onClick={this.handleCategories}>{this.state.btnText}</button> }
    </div> 

    {/* Did Hide the home page when search button is clicked */}
    {this.state.showhomeimg===true &&
    <div className="Homepage">
    <h1>Custom Vintage Collections Everyday</h1>
    
    <img id="jewel" src={jewelbox}/>
    </div>}

    {/* Hiding the products when product info and categories page is rendered */}
    {(this.state.showcategories===false && this.state.showproduct===false )?
    <div className="Gridcontainer">
   {this.state.Renderdata}
     </div>:null}
     {/* component product info is invoked if the image button is clicked */}
     {(this.state.showproduct===true && this.state.showcategories===false) &&
     <div><Productinfo name={this.state.Renderdata} info={this.state.productinfo} id={this.state.id}/></div>}
    
    {/* Router page is rendered when categories button is clicked */}

{this.state.showcategories===true && <MoreCollections />}

{/* backbtn is displayed when product info is displayed  */}
  <button id="backbtn" onClick={this.backbtn} style={{visibility: this.state.showproduct===true ? 'visible' : 'hidden' }} >Back</button>
</div>
</React.Fragment>
)
 }

}