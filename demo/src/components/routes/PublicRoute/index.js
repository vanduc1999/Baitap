import { Component, useEffect } from "react"
import { useNavigate } from "react-router-dom";
const PublicRoute =()=>{
    const navigate = useNavigate();
    
    useEffect(()=>{
        const token = localStorage.getItem(token);

        if (token) {
            navigate ("/dashboard")
        }
    },[]);

    return <div></div>

}
export default PublicRoute;