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
            <input type="search" placeholder="Search for movie..." onChange={handleSearch}/>
            <input type="submit" onClick={getMovies} value="Search"/>
        </form>
    )
}

//Kilder: Gitcollab og News kode
//Samarbeidet med Stine og Marianne