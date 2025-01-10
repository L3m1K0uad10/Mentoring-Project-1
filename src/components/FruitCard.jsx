import React from "react";



function Fruit(props) {
    
    return (
        <div className = "fruit-card">
          <h4>{props.name}</h4>
          <img src = {props.image} alt="mango" height={272} width={378}/>
          <div className="card-labels-container">
            <ul>
              <li>vitamin A</li>
              <li>vitamin B6</li>
              <li>vitamin C</li>
              <li>vitamin K</li>
              <li>vitamin E</li>
              <li>Folate</li>
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