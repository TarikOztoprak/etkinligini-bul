import React from 'react'
import "../Assets/Styles/Event.css"
import { Link } from "react-router-dom";
import CategoryBadge from './CategoryBadge'
function Event(props) {
  return (
    <div className='Event'>
        <img alt={props.name} className='Event-Img' src={props.url}></img>
        <CategoryBadge category={props.category}/>
        <h3>{props.name}</h3>
        <p>{props.building}, {props.city}</p>
        <p>{props.startdate} - {props.enddate}</p>
        <div className='Button-Container'>
          <Link className='Details-Button' to={"details/" + props.id} >Detaylar</Link>
        </div>
    </div>
  )
}

export default Event