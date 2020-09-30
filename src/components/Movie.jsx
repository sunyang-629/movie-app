import React from 'react';
const IMG_API = 'https://image.tmdb.org/t/p/w1280';

const Movie = ({title,poster_path,overview,vote_average}) => {
  const setVoteColor = (vote) => {
    if (vote >= 8) {
      return 'green'
    } else if (vote >= 6) {
      return 'orange'
    } else {
      return 'red'
    }
  }

  return <div className="movie">
    <div className="movie_header">
      <img src={IMG_API + poster_path} alt={title} />
      <div className="movie_info">
        <h3>{title}</h3>
        <span className={`tag ${setVoteColor(vote_average)}`}>{vote_average}</span>
      </div>
    </div>
    <div className="movie-overview">
      <h2>overview</h2>
      <p>{overview}</p>
    </div>
  </div>
}

export default Movie;