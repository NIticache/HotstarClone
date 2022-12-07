import React from 'react'
import "../Styles/home.css"
import viewer1 from "../Images/viewers-disney.png";
import viewer3 from "../Images/viewers-marvel.png";
import viewer2 from "../Images/viewers-national.png";
import viewer4 from "../Images/viewers-pixar.png";
import viewer5 from "../Images/viewers-starwars.png";
import viewer1vid from "../Videos/1564674844-disney.mp4";
import viewer3vid from "../Videos/1564676115-marvel.mp4";
import viewer2vid from "../Videos/1564676296-national-geographic.mp4";
import viewer4vid from "../Videos/1564676714-pixar.mp4";
import viewer5vid from "../Videos/1608229455-star-wars.mp4";
const Viewers = () => {
  return (
    <div className='Viewers'>
        <div className='wrapdiv'>
            <img src={viewer1} alt= "" />
            <video autoPlay={true} loop={true} playsInline={true}>
          <source src={viewer1vid} type="video/mp4" />
        </video></div>
        <div className='wrapdiv'>            <img src={viewer2} alt= "" /> <video autoPlay={true} loop={true} playsInline={true}>
          <source src={viewer2vid} type="video/mp4" />
        </video></div>
        <div className='wrapdiv'>            <img src={viewer3} alt= "" /><video autoPlay={true} loop={true} playsInline={true}>
          <source src={viewer3vid} type="video/mp4" />
        </video></div>
        <div className='wrapdiv' >            <img src={viewer4} alt= "" /><video autoPlay={true} loop={true} playsInline={true}>
          <source src={viewer4vid} type="video/mp4" />
        </video></div>
        <div className='wrapdiv'>            <img src={viewer5} alt= "" /><video autoPlay={true} loop={true} playsInline={true}>
          <source src={viewer5vid} type="video/mp4" />
        </video></div>
    </div>
  )
}

export default Viewers