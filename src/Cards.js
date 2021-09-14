import React, { useState } from 'react'
import "./Cards.css"
import data from'./data'

function Cards() {
    const [items, setItems] = useState(data);

    return (

        <div className="cards">
            {items.map((el)=>{
            const{Diamond_name, src, price, Description, shape, cut, color, carat, clarity} = el;
        })}
                <img className="imgg" src="https://3.imimg.com/data3/SD/ML/MY-6991196/diamonds-500x500.jpg" alt="imgg"/>
            <div className="card-bottom">
                {/* <h3>{data.Diamond_name}</h3> */}
                <h3>Description</h3>
                <p>price</p>
            </div>
        </div>
    )
}

export default Cards
