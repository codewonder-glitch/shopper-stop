
import React,{Component} from 'react';

export default function Productinfo(props){
return(
<div className="rendercomp">
    {props.name[props.id]}
    {props.info[props.id]}
    </div>
)
}