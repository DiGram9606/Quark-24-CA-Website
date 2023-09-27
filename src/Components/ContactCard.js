import React from "react"
import "./ContactCard.css"

export default function ContactCard(props){
    const {image, name, title, number}=props
    return(
        <div className={`contact-card ${props.styling}`}>
        <img src={image} />
        <h3>{name}</h3>
        <h4>{title}</h4>
        <p>Contact: {number}</p>
        </div>
    )
}