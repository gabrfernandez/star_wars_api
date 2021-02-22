import React, { useState } from 'react';
import { navigate } from '@reach/router';

function Search(){
    const [search, setSearch]=useState({
        option: "people", 
        id: ""
    });

    // if (search===null) return 'Loading...'

    function onChangeHandler(e){
        setSearch({
            ...search, 
            [e.target.name] : e.target.value
        });
    }

    function onSubmitHandler(e){
        e.preventDefault();
        navigate('/' + search.option +"/"+search.id)
    }

    return (
        <form onSubmit={onSubmitHandler} class="search">
            <label>Search</label>
            <select name= "option" value={search.option} onChange={onChangeHandler}>
                <option value="people">People</option>
                <option value="planets">Planets</option>
                <option value="starships">Starships</option>
            </select>
            <label>ID</label>
            <input name="id" value={search.id} onChange={onChangeHandler}/>
            <button>Submit</button>
        </form>
    )

}

export default Search;