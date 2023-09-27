import React from "react"
import "./Registration.css"
import App from "../App.js"
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Registration from "./Registration";

export default function reghelp(){
    return(
        <Routes>
            <Route path="/register" element={<Registration/>}/>
        </Routes>
    )
}