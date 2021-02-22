import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

function Planet({id}){
    const [planets, setPlanets]= useState(null);

    useEffect(()=>{
        axios.get('https://swapi.dev/api/planets/'+id+'/')
            .then(response =>setPlanets(response.data))
            .catch(()=>navigate("/NotFound"))

    }, [id]);

    if(planets===null) return 'Loading...'

    return(
        <div class="planets">
            <h1>Name: {planets.name}</h1>
            <p>Climate: {planets.climate}</p>
            <p>Terrain: {planets.terrain}</p>
            <p>Surface Water: {planets.surface_water}</p>
            <p>Population: {planets.population}</p>
        </div>
    )

}

export default Planet;