import React from "react";
import "./swCard.css";

const StarWarsCardPlanets = ({starwars})=>{
    return (
        <div className="starWars-card-planets">
            <div className="starWars-info">
                <h2>Planetas</h2>
                <p>Tipo: {starwars.type}</p>
                <p>ID: {starwars.id}</p>
            </div>
        </div>
    );
};

export default StarWarsCardPlanets;