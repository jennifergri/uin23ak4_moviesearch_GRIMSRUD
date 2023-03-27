import React from 'react';
export default function SearchResults({getMovies, setSearch}){
    
    //funksjon som gjør at siden ikke skal refreshe seg:
    const handleSubmit = (event) => {
        event.preventDefault()
    }

    const handleSearch = (event) => {
        if(event.target.value.length > 2) {
            setSearch(event.target.value)
            console.log(event.target.value)
        }
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <input type="search" placeholder="Søk etter film..." onChange={handleSearch}/>
            <button type="submit" onClick={getMovies}>Søk</button>
        </form>
    )
}

//Kilder: kode fra forelesning om matprat