import React from "react"
import "./Roles.css"
import Card from "./Card.js"

export default function Roles(){
    return(
        <div className="roles">
            <h1>What Will You Do?</h1>
            <div className="what-to-do">
                <Card 
                cardclass="card-six"
                bgcolor="#5B0888"
                text="Ambassadors actively promote Quark and its Pre-events across their campus through various channels, such as social media, posters, flyers, and word-of-mouth. They engage with students, clubs, and faculty to create awareness about the fest and generate excitement."
                title= "Promotion and Awareness"
                />
               <Card 
                cardclass="card-seven"
                bgcolor="#5B0888"
                text="Ambassadors act as the primary point of contact for students with queries about Quark. They facilitate registration for workshops, events, and competitions and encourage maximum participation."
                title= "Campus Outreach"
                />
                <Card 
                cardclass="card-eight"
                bgcolor="#5B0888"
                text="Ambassadors organize pre-fest activities like quizzes, hackathons, or tech-related events to engage the campus community and build excitement for the upcoming fest."
                title= "Campus Engagement Activities"
                />
                <Card 
                cardclass="card-nine"
                bgcolor="#5B0888"
                text="They manage Quark's social media presence, keeping it vibrant and interactive to engage followers and attract potential participants"
                title= "Social Media Management"
                />
               
            </div>
        </div>
    )
}