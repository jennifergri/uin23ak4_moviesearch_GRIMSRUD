import React from 'react';
import MovieCard from './MovieCard';

export default function MovieCards({movies}){
    return(
        <section>
            {movies.map((movie, index) =>(
                <MovieCard 
                key={index} 
                imdbID={movie.imdbID}/>
            ))}
        </section>
    )
}

//Kilder: kode fra forelesning om matprat og news
//Samarbeidet med Stine og Marianne