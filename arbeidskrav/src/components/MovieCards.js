import React from 'react';
import MovieCard from './MovieCard';

export default function MovieCards({movies}){
    return(
        <section>
            {movies.map((movie, index) =>(
                <MovieCard 
                key={index} 
                poster={movie?.Poster} 
                title={movie?.Title} 
                year={movie?.Year}/>
            ))}
        </section>
    )
}

//Kilder: kode fra forelesning om matprat og news