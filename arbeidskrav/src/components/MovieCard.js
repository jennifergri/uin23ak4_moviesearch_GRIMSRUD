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
        <article className="movie-card">
            <img src={movie.Poster !== "N/A" ? movie.Poster : "https://cdn.pixabay.com/photo/2016/09/11/18/26/frame-1662287_1280.png"} alt={movie.Title}></img>
            <h3>{movie.Title}</h3>
            <section>
                <h4>Plot: <span>{movie.Plot !== "N/A" ? movie.Plot : "Not Available"}</span></h4>
                <h4>Runtime: <span>{movie.Runtime !== "N/A" ? movie.Runtime : "Not Available"}</span></h4>
                <h4>Published: <span> {movie.Year !== "N/A" ? movie.Year : "Not Available"}</span></h4>
                <h4>Genre: <span> {movie.Genre !== "N/A" ? movie.Genre : "Not Available"}</span></h4>
                <h4>Director: <span> {movie.Director !== "N/A" ? movie.Director : "Not Available"}</span></h4>
                <h4>Actors: <span> {movie.Actors !== "N/A" ? movie.Actors : "Not Available"}</span></h4>
                <h4>Awards: <span> {movie.Awards !== "N/A" ? movie.Awards : "None"}</span></h4>
            </section>
        </article>
    )
}

//Kilder: Gitcollab og News kode
//Samarbeidet med Stine og Marianne