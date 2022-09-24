import React from 'react'
import "./card.css"

export default function Card(props){


    return(
        <div className="card">
            <div className="left-side">
            <img src={props.img} alt="" />
            </div>
            <div className="right-side">
            <h3>Location: {props.location}</h3>
            <a href="{props.location_link}" target="_blank" rel="noopener noreferrer">Location on the map.</a>
            <h2>Name: {props.name}</h2>
            <p className='date'>visited: {props.date.from} - {props.date.to}</p>
            <p className='text'>{props.text}</p>
            </div>

        </div>
    )
}