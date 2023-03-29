import React from 'react';
import MovieCard from './MovieCard';

export default function MovieCards({movies}){
    return(
        <section className='movies'>
            {movies.map((movie, index) =>(
                <MovieCard 
                key={index} 
                imdbID={movie.imdbID}/>
            ))}
        </section>
    )
}

//Kilder: Gitcollab og News kode
//Samarbeidet med Stine og Marianne