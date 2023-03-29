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
    },[imdbID])

    return(
        <article className="article-card">
            <img src={movie.Poster !== "N/A" ? movie.Poster : "https://cdn.pixabay.com/photo/2016/09/11/18/26/frame-1662287_1280.png"} alt={movie.Title}></img>
            <h3>{movie.Title}</h3>
            <p>Plot: {movie.Plot !== "N/A" ? movie.Plot : "Not Available"}</p>
            <p>Runtime: {movie.Runtime !== "N/A" ? movie.Runtime : "Not Available"}</p>
            <p>Published: {movie.Year !== "N/A" ? movie.Year : "Not Available"}</p>
            <p>Genre: {movie.Genre !== "N/A" ? movie.Genre : "Not Available"}</p>
            <p>Director: {movie.Director !== "N/A" ? movie.Director : "Not Available"}</p>
            <p>Actors: {movie.Actors !== "N/A" ? movie.Actors : "Not Available"}</p>
            <p>Awards: {movie.Awards !== "N/A" ? movie.Awards : "None"}</p>
        </article>
    )
}

//Kilder: kode fra forelesning om matprat og news
//Samarbeidet med Stine og Marianne