import React from "react";
import { useParams, Link } from "react-router-dom";

import Logo from "../assets/logo.png";

import "./styles/SigningPage.css";


function SigningPage() {
    const params = useParams();

    const submitButtonValue = params.slug == "sign-in" ? "LOG IN" : "SIGN UP";

    return (
        <div className = "signing-page-container">
            <img className = 'logo' src = {Logo} alt = "fruit app logo"/>
            <h3>DELICIOSO FRUITS</h3>

            <form action = "">
                <input className = "input-type-1" type = "email" placeholder = "email"/>
                <input className = "input-type-1" type = "password" placeholder = "password"/>
                {   
                    params.slug == "sign-up" && <input className = "input-type-1" type = "password" placeholder = "re-enter password"/>
                }

                <input className = "input-type-2" type = "submit" value = {submitButtonValue}/>

                {   
                    params.slug == "sign-in" ? 
                    <p>Don't have an account? <Link to = "/sign-up">sign up here.</Link></p> :
                    <p>Already have an account? <Link to = "/sign-in">log in here.</Link></p>
                }
            </form>
        </div>
    )
}

export default SigningPage;