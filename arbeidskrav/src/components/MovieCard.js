import React from 'react';

export default function MovieCard({poster, title, year, time, genre}){
    return(
        <article className="article-card">
            <img src={poster != "N/A" ? poster : "https://cdn.pixabay.com/photo/2016/09/11/18/26/frame-1662287_1280.png"}></img>
            <h3>{title}</h3>
            <p>{year}</p>
            <p>{time}</p>
            <p>{genre}</p>
            <button>Mer om filmen</button>
        </article>
    )
}

//Kilder: kode fra forelesning om matprat og news