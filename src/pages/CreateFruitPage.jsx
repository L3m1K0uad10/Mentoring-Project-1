import React from "react";

import Logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import "./styles/CreateFruitPage.css";


function CreateFruitPage() {

    return (
        <div className = "create-fruit-page-container">
            <img className = 'logo' src = {Logo} alt = "fruit app logo"/>
            <h3>DELICIOSO FRUITS</h3>

            <h2>Add Fruit</h2>
            <form action = "" className = "create-fruit-page-form">
                <div className = "create-fruit-page-form-wrapper-1">
                    <div>
                        <input className = "form-wrapper-1-inputfield" type = "text" name = "name" id = "name" placeholder = "name"/>
                        <div style = {{width: "280px", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                            <p style = {{textWrap: "nowrap"}}>Upload Image</p>
                            <input type = "file" name = "upload" id = "upload" style = {{width: "auto", marginLeft: "20px"}}/>
                        </div>
                        {/* <label htmlFor = "">Upload Image</label>
                        <input type = "file" /> */}
                    </div>
                    <div style = {{width: "280px", height: "40px", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                        <label htmlFor = "">Add vitamin</label>
                        <FontAwesomeIcon className = "fa-icon Plus" icon = {faPlus} />
                    </div>
                    <div>
                        <input className = "form-wrapper-1-inputfield" type = "text" name = "price" id = "price" placeholder = "enter price"/>
                    </div>
                </div>
                <div className = "create-fruit-page-form-wrapper-2">
                    <input type = "submit" value = "SAVE" />
                </div>
            </form>
        </div>
    )
}

export default CreateFruitPage;