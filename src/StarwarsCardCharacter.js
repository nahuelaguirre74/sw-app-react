import React from "react";
import "./swCard.css";

const StarWarsCardCharacter = ({starwars})=>{
    return (
        <div className="starWars-card-character">
            <div className="starWars-info">
                <h2>Personajes</h2>
                <p>Tipo: {starwars.type}</p>
                <p>ID: {starwars.id}</p>
            </div>
        </div>
    );
};

export default StarWarsCardCharacter;