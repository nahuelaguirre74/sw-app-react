import React from "react";
import "./swCard.css";

const StarWarsCardStarships = ({starwars})=>{
    return (
        <div className="starWars-card-starships">
            <div className="starWars-info">
                <h2>Naves</h2>
                <p>Tipo: {starwars.type}</p>
                <p>ID: {starwars.id}</p>
            </div>
        </div>
    );
};

export default StarWarsCardStarships;