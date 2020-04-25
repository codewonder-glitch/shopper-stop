import React,{Component} from 'react';
import './Trending.scss'

export default function Activerender(props){
    console.log(props.info[props.id])
return(
    <div id="Gridcontainer">
{props.info}
        </div>
)
}