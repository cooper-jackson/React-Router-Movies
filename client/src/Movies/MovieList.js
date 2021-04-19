import React from 'react';
import { Link, useParams } from 'react-router-dom'

export default function MovieList(props) {

  const params = useParams();
  console.log(params)
  
  // const movie = props.movies.find(item => item.id === Number(params.movie))
  console.log(props.movie)

  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore } = props.movie;


  return (
    <Link to={`/movies/${props.movie.id}`}>
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
      </div>
   </Link>
  );
}
