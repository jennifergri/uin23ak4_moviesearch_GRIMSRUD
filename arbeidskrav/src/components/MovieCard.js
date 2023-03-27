import React from 'react';

export default function MovieCard({poster, title, year}){
    return(
        <article className="article-card">
            <img src={poster} alt={title}></img>
            <h3>{title}</h3>
            <p>{year}</p>
        </article>
    )
}

//Kilder: kode fra forelesning om matprat og news