import React from 'react'
import "../Assets/Styles/Event.css"
function Event(props) {
  return (
    <div className='Event'>
        <img className='Event-Img' src={props.url}></img>
        <h3>{props.name}</h3>
        <p>{props.building}, {props.city}</p>
        <p>{props.startdate} - {props.enddate}</p>
    </div>
  )
}

export default Event