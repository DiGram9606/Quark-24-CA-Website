import React from "react"
import "./Registration.css"
import App from "../App.js"
import { BrowserRouter, Link, Routes, Route, useNavigate } from "react-router-dom";
export default function Registration(){
    let [formData, updateFormData]=React.useState({
        name:"",
        mobile:"",
        email:"",
        college:"",
        personalAddress:"",
        collegeAddress:"",
    })

    const navigate = useNavigate();

    React.useEffect(()=>{
        //console.log(formData)
    }, [formData])

    function handleChange(event){
        let {name, value}=event.target
        updateFormData(old=>({...old, [name]:value}))
    }

    function handleSubmit(event){
        console.log(formData)
    }

    return(
        <div className="registration">
        <h1>Registration<button as="Link" to="" onClick={()=>{
            updateFormData({
                name:"",
                mobile:"",
                email:"",
                college:"",
                personalAddress:"",
                collegeAddress:"",
            })
            navigate("/")
            
        }}>X</button></h1>
        <div className="registration-container">
            <div>
                <input
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                />
                <input
                type="text"
                placeholder="Mobile No."
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                />
                <input
                type="email"
                placeholder="E-Mail"
                name="email"
                value={formData.email}
                onChange={handleChange}
                />
                <input
                type="text"
                placeholder="College Name"
                name="college"
                value={formData.college}
                onChange={handleChange}
                />
                
            </div>
            <div>
            <textarea
                //type="text"
                placeholder="Personal Address"
                name="personalAddress"
                value={formData.personalAddress}
                onChange={handleChange}
                rows={5}
                />
                <textarea
                //type="text"
                placeholder="College Address"
                name="collegeAddress"
                value={formData.collegeAddress}
                onChange={handleChange}
                rows={5}
                
                />  
            </div>
        </div>
        <button onClick={handleSubmit}>Submit</button>
    </div>
        )
    }

    