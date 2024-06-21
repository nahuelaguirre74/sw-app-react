import React, {useState, useEffect} from "react";
import StarWarsCardCharacter from './StarwarsCardCharacter'
import StarWarsCardPlanets from "./StarwarsCardPlanets";
import StarWarsCardStarships from './StarwarsCardStarships';
import './swList.css';

const StarwarsList = ({starWars, filterstarWars})=>{
    const [filteredSw, setFilteredSw] = useState(starWars); //primaria

    useEffect(()=>{
        setFilteredSw(
            starWars.filter((sw)=> sw.type === filterstarWars || filterstarWars === 'all')
        );
    },[starWars, filterstarWars]);

    return(
        <div className="sw-list">
            {filteredSw.map((sw)=>(
                <starwarsCard key={sw.id}sw={sw}/>
            ))}
        </div>

    );
};

export default StarwarsList;