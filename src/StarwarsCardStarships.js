import React from "react";
import "./swCard.css";

const StarWarsCardStarships = ({starwars})=>{
    return (
        <div className="starWars-card-starships">
            <div className="starWars-info">
            <h2>${nave.name}</h2>
            <p>Modelo: ${nave.model}</p>
            <p>Manofactura: ${nave.manufacturer}</p>
            <p>Costo de la Nave: ${nave.cost_in_credits}Créditos</p>
            <p>Tamaño: ${nave.length}mts</p>
            </div>
        </div>
    );
};

export default StarWarsCardStarships;