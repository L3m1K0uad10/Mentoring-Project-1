import React from "react";

import Logo from "../assets/logo.png";

import "./styles/SigningPage.css";


function SigningPage() {

    return (
        <div className = "signing-page-container">
            <img className = 'logo' src = {Logo} alt = "fruit app logo"/>
            <h3>DELICIOSO FRUITS</h3>

            <form action = "">
                <input className = "input-type-1" type = "email" placeholder = "email"/>
                <input className = "input-type-1" type = "password" placeholder = "password"/>
                <input className = "input-type-1" type = "password" placeholder = "re-enter password"/>

                <input className = "input-type-2" type = "submit" value = "SIGN UP"/>
                
                <p>Already have an account? <a>log in here.</a></p>
            </form>
        </div>
    )
}

export default SigningPage;