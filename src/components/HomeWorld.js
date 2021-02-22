import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HomeWorld({url}){
    const [homeworld, setHomeworld]= useState({});

    useEffect(()=>{
        axios.get(url)
            .then(response=>setHomeworld(response.data))
            .catch(console.log)
        },[url]);


    return(
        <div>
            <p>Home World: {homeworld.name}</p>
        </div>
    )

}

export default HomeWorld;