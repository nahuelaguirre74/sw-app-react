import React from "react";
import "./swCard.css";

const StarWarsCardCharacter = ({starwars})=>{
    return (
        <div className="starWars-card-character">
            <div className="starWars-info">
            <h2>${character.name}</h2>
            <p>Altura: ${character.height} cm</p>
            <p>Peso: ${character.mass} kg</p>
             <p>Año de Nacimiento: ${character.birth_year}</p>
             <p>Genero: ${character.gender}</p>
             
            </div>
        </div>
    );
};

export default StarWarsCardCharacter;