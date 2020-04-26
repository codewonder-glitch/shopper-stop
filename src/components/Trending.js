import React,{Component} from 'react';
import axios from 'axios'
import './Style/Trending.scss'

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
axios.get("https://community-etsy.p.rapidapi.com/listings/trending?api_key=68k3wa84d1gbn8t4zzh3yikl", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "community-etsy.p.rapidapi.com",
		"x-rapidapi-key": "0c50512463mshf6956ddd7cdbe33p13858djsn036596cdcff1"
	}
})
    .then(response => {
        
        console.log("In trending ",response.data.results);
        this.setState({vintagedata:response.data.results})
      
        elements=this.state.vintagedata.map((vintage,key)=>{
          
           return(
<       div>
        <div className="linkdiv">
        
        <p><b>Title</b></p>
        <p>{vintage.title}</p>
        <p><b>Price</b></p>
        <p>{vintage.price}</p> 
        <p><b>For more details</b></p>   
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