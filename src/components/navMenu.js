import React from "react"; 
import { Link } from "react-router-dom"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function NavigationMenu() {
    return(
        <>
        <ul className="flex flex-row ">
            <li><Link to="/aboutMe">About me</Link></li>
            <li><Link to="/calender">Calender</Link></li>
            <li><Link to="/youtube">Youtube</Link></li>
            <li><Link to="/sessionList">My sessions</Link></li>
        </ul>
        </>
    )
}

export default NavigationMenu; 