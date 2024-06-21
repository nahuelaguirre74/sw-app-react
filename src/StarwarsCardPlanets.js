import React from "react";
import "./swCard.css";

const StarWarsCardPlanets = ({starwars})=>{
    return (
        <div className="starWars-card-planets">
            <div className="starWars-info">
            <h2>${planetas.name}</h2>
            <p>Rotación: ${planetas.rotation_period}Horas</p>
            <p>Órbita: ${planetas.orbital_period}Días</p>
            <p>Diámetro: ${planetas.diameter}Km2</p>
            <p>Clima: ${planetas.climate}</p>
            </div>
        </div>
    );
};

export default StarWarsCardPlanets;