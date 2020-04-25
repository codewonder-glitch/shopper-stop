
import React,{Component} from 'react';
import './Style/Trending.scss'

export default function Productinfo(props){
    
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