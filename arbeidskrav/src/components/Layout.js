import React from 'react';
import SearchResults from "./SearchResults";
import MovieCards from "./MovieCards";

export default function Layout({getMovies, movies, setSearch}){
    return(
        <div className="container">
            <header>
                <h1>MovieSearch</h1>
            </header>
            
            <nav>
                <SearchResults getMovies={getMovies} setSearch={setSearch}/>
            </nav>
            
            <main>
                <MovieCards movies={movies}/>
            </main>
        </div>
    )
}

//Kilder: Gitcollab og News kode
//Samarbeidet med Stine og Marianne