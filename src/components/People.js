import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import HomeWorld from "./HomeWorld"


function People({id}){
    const [people, setPeople]= useState(null);

    useEffect(()=>{
        axios.get('https://swapi.dev/api/people/'+id)
            .then(response =>setPeople(response.data))
            .catch(()=>navigate("/NotFound"))

    }, [id]);

    if(people===null) return 'Loading...'

    

    return(
        <div class="people">
            <h1>Name: {people.name}</h1>
            <HomeWorld url={people.homeworld}/>
            <p>Height: {people.height}</p>
            <p>Hair Color: {people.hair_color}</p>
            <p>Eye Color: {people.eye_color}</p>
            <p>Skin Color: {people.skin_color}</p>
        </div>
    )

}

export default People;