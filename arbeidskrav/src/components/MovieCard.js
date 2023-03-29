import React, { useEffect, useState } from 'react';

export default function MovieCard({imdbID}){

    const [movie, setMovie] = useState([])
      
    const getMovie = async() => {
        const response = await fetch (`http://www.omdbapi.com/?i=${imdbID}&type=movie&apikey=9ebf19a7`)
        /*OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=9ebf19a7*/
        /*API parameter: https://www.omdbapi.com*/
        const data = await response.json()
        setMovie(data)
        console.log(movie)
    }
  
    useEffect(() => {
        getMovie()
    },[])

    return(
        <article className="article-card">
            <img src={movie.Poster !== "N/A" ? movie.Poster : "https://cdn.pixabay.com/photo/2016/09/11/18/26/frame-1662287_1280.png"} alt={movie.Title}></img>
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            <p>{movie.Genre}</p>
            <p>Director: {movie.Director}</p>
            <p>Actors: {movie.Actors}</p>
            <p>{movie.Awards}</p>
            <p>{movie.Plot}</p>
        </article>
    )
}

//Kilder: kode fra forelesning om matprat og news
//Samarbeidet med Stine og Marianne