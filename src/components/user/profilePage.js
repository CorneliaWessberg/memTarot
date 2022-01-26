import React, { useState, useEffect } from "react";
import axios from "axios";

//ProfilPage, showing information about the user that is logged in. 
function ProfilePage() {
  
  const firstname = localStorage.getItem("firstname");
  const lastname = localStorage.getItem("lastname");
  const email = localStorage.getItem("userEmail");

 

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="justify-center">
          <h1>Firstname: {firstname} </h1>
          <h1>Lastname: {lastname} </h1>
          <h1>Email: {email} </h1>

          <h1> session: </h1>
    
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
