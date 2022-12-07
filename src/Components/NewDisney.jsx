import React from 'react'
import "../Styles/home.css"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { selectNewDisney } from '../features/movie/MovieSlice';
const NewDisney = () => {
  const movies=useSelector(selectNewDisney);
  console.log(movies)
  return (
    <div className='rec-container'>
        <h3>New Disney</h3>

        <div className='rec-content'>
        {movies &&
          movies.map((movie, key) => (
            <div className='rec-wrap' key={key}>
              {movie.id}
              <Link to={`/detail/` + movie.id}>
                <img src={movie.cardImg} alt={movie.title} />
              </Link>
            </div>
          ))}
           
            
        </div>
    </div>
  )
}

export default NewDisney