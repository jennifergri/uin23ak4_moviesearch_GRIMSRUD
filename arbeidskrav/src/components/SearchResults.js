import React from 'react';
export default function SearchResults({getMovies}){
    
    //funksjon som gjør at siden ikke skal refreshe seg:
    const handleSubmit = (event) => {
        event.preventDefault()
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <input type="search" placeholder="søk etter film..."/>
            <button type="submit" onClick={getMovies}>Søk</button>
        </form>
    )
}

//Kilder: kode fra forelesning om matprat