import React from "react"; 
import { Link } from "react-router-dom"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function NavigationMenu() {
    return(
        <>
        <ul className="flex flex-row ">
            <li><Link to="/aboutMe">About me</Link></li>
            <li><Link to="/aboutMe">Calender</Link></li>
            <li><Link to="/aboutMe">Youtube</Link></li>
            <li><Link to="/aboutMe">My sessions</Link></li>
        </ul>
        </>
    )
}

export default NavigationMenu; 