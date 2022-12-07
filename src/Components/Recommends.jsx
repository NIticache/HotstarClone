import React from 'react'
import "../Styles/home.css"
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";
import { selectRecommend } from '../features/movie/MovieSlice';
const Recommends = () => {
  const movies=useSelector(selectRecommend);
  console.log(movies)
  return (
    <div className='rec-container'>
        <h3>Recommended For you</h3>

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
            {/* <div className='rec-wrap'><Link to="/"><img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5052/1405052-v-2063bab41935" alt=""/></Link></div>
            <div className='rec-wrap'><Link to="/"><img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5052/1405052-v-2063bab41935" alt=""/></Link></div>
            <div className='rec-wrap'><Link to="/"><img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5052/1405052-v-2063bab41935" alt=""/></Link></div>
            <div className='rec-wrap'><Link to="/"><img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5052/1405052-v-2063bab41935" alt=""/></Link></div> */}


            
        </div>
    </div>
  )
}

export default Recommends