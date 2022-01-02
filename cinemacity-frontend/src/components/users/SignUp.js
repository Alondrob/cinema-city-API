import React, {useState, useEffect} from 'react'

const SignUp = () => {
  

    const [userData, setUserData] = useState({ "email": "", "password": "", "password_confirmation": "" })
    

    const submitForm = () => {

    }
    
    return (
        <div>
            <form onSubmit={submitForm}>
                
                <label> Email </label>
                <input type="email"/>
                <label> Password</label>
                <input type="password"/>
                <label> Password Confirmation </label>
                <input type="password"/>
                <input type="submit"/>
                
            </form>
        </div>
    )
}

export default SignUp
