import React from "react";
import "./swCard.css";

const StarWarsCardPlanets = ({starwars})=>{
    return (
        <div className="starWars-card-planets">
            <img src={starwars.image} alt={starwars.name}/>
            <div className="starWars-info">
                <h2>{starwars.name}</h2>
                <p>Tipo: {starwars.type}</p>
                <p>ID: {starwars.id}</p>
            </div>
        </div>
    );
};

export default StarWarsCardPlanets;