import React from 'react';
import SearchResults from "./SearchResults";
import MovieCards from "./MovieCards";

export default function Layout({getMovies, movies, setSearch}){
    return(
        <div className="container">
            <header>
                <h1>MovieSearch</h1>
            </header>
            
            <main>
                <SearchResults getMovies={getMovies} setSearch={setSearch}/>
                <MovieCards movies={movies}/>
            </main>
        </div>
    )
}

//Kilder: kode fra forelesning om matprat og news
//Samarbeidet med Stine og Marianne