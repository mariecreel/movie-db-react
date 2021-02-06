import React from 'react';

export default function CardList(movie){
  return(
        <div className="card" key={movie.data.id}>
          <img className="card--image"
          src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.data.poster_path}`}
          alt={movie.data.title + ' poster'}/>
          <div className="card--content">
            <h3 className="card--title">{movie.data.title}</h3>
            <p><small>RELEASE DATE: {movie.data.release_date}</small></p>
            <p><small>RATING: {movie.data.vote_average}</small></p>
            <p className="card--desc">{movie.data.overview}</p>
          </div>
        </div>
  )
};
