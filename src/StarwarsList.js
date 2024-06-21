import React, {useState, useEffect} from "react";
import StarWarsCardCharacter from './StarwarsCardCharacter'
import StarWarsCardPlanets from "./StarwarsPlanets";
import StarWarsCardStarships from './StarwarsCardStarships';
import './swList.css';

const starwarsList = ({starWarss, filterstarWars})=>{
    const [filteredSw, setFilteredSw] = useState(starWarss); //primaria

    useEffect(()=>{
        setFilteredSw(
            starWarss.filter((sw)=> sw.type === filterstarWars || filterstarWars === 'all')
        );
    },[starWarss, filterstarWars]);

    return(
        <div className="sw-list">
            {filteredSw.map((sw)=>(
                <starwarsCard key={sw.id}sw={sw}/>
            ))}
        </div>

    );
};

export default starwarsList;