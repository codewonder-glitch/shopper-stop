
import React,{Component} from 'react';
import './Trending.scss'

export default function Productinfo(props){
    console.log(props.info[props.id])
return(
    <div>
    <div>
    {props.name[props.id]}
    </div>
<div className="rendercomp">
    
    {props.info[props.id]}
   
    </div>
    </div>
)
}