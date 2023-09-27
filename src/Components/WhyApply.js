import React from "react"
import "./WhyApply.css"
import Card from "./Card.js"

export default function WhyApply(){
    return(
        <div className="why-apply">
            <h1>Why Should You Apply?</h1>
            <div className="reasons-to-apply">
                <Card 
                cardclass="card-one"
                bgcolor="#191E51"
                text="Program opens doors to exciting internship opportunities. Gain valuable experience, expand your network, and elevate your career in technology."
                title= "Internship Opportunities"
                />
                <Card 
                cardclass="card-two"
                bgcolor="#191E51"
                title="Skill Development"
                text="The program offers opportunities for participants to develop a diverse set of skills, including leadership, communication, event management, and networking, which are invaluable for personal and professional growth."
                 />
                <Card 
                cardclass="card-three"
                bgcolor="#191E51"
                text="Campus Ambassadors get a chance to interact with industry professionals, guest speakers, and renowned personalities during the fest, creating networking opportunities that can open doors for future career prospects."
                title="Industry Exposure"
                />
                <Card 
                cardclass="card-four"
                bgcolor="#191E51"
                title="Recognition and Certification"
                text="Quark acknowledges the efforts of its Ambassadors through special recognition during the fest and beyond, giving them a sense of pride and accomplishment."
                 />
                 <Card 
                cardclass="card-five"
                bgcolor="#191E51"
                title="Exclusive Rewards"
                text="Participants can earn exclusive rewards, merchandise, and incentives as a token of appreciation for their dedication and contribution to making Quark a grand success." 
                />
            </div>
        </div>
    )
}