import React, { useState, useEffect } from "react"; 
import axios from "axios";

function ProfilePage() {

    const [users, setUsers] = useState([])
    const firstname = localStorage.getItem("firstname")
    const lastname = localStorage.getItem("lastname")
    const email = localStorage.getItem("email")

    useEffect(() => {

        const fetchUsers = async () => {
            const response = await axios.get(`https://localhost:1337/users`)
            console.log(response)
            
            setUsers(response.data)
        }

        fetchUsers()
    }, [])

    return(
        <>
        
        <div className="flex items-center flex-col">
        <div className="justify-center">
        <h1>Firstname: {firstname} </h1>
        <h1>Lastname: {lastname} </h1>
        <h1>Email: {email} </h1>

        <h1>Upcoming session: </h1>
        <h1>Recently done sessions </h1>
        </div>
        </div>
        </>
    )
}

export default ProfilePage; 