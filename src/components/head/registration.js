import React , {useState, useEffect} from "react";


function Register() {

    const initialValues = {
        firstname: "",
        lastname:  "",
        username: "",
        email: "", 
        password: ""
    }

    const [regValues, setRegValues] = useState(initialValues)

   return(
       <>
       <h1>Register as a member here</h1>
       </>
   )
}

export default Register; 