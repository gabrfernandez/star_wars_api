import React, {useEffect, useState} from 'react'
import axios from "axios"
import { navigate } from '@reach/router';

const Starship = ({id}) => {
    const [starships, setStarships]= useState(null);

    useEffect(()=>{
        axios.get('https://swapi.dev/api/starships/'+id+'/')
            .then(response =>setStarships(response.data))
            .catch(()=>navigate("/NotFound"))

    }, [id]);

    if(starships===null) return 'Loading...'
    return (
        <div class="starships">
            <h1>Name: {starships.name}</h1>
            <p>Model: {starships.model}</p>
            <p>Cost: {starships.cost_in_credits}</p>
            <p>Passengers: {starships.passengers}</p>
            <p>Cargo Capacity: {starships.cargo_capacity}</p>
        </div>
    )
}

export default Starship
