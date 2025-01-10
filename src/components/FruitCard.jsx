import React from "react";



function Fruit(props) {

    const VitaminItem = props.vitamins.map(item => {
        return <li>{item}</li>
    })
    
    return (
        <div className = "fruit-card">
            <h4>{props.name}</h4>
            <img src = {props.image} alt="mango" height={272} width={378}/>
            <div className="card-labels-container">
                <ul>
                    {VitaminItem}
                </ul>
                <div>
                    <p>{props.price} $</p>
                </div>
            </div>
            <div className = "card-btns-container">
                <button>update</button>
                <button>delete</button>
            </div>
        </div>
    )
}


export default Fruit;