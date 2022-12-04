import React from "react";
import "../Styles/Login.css";
import Disneylogo from "../Images/Disneylogo.svg";
import SearchIcon from "../Images/search-icon.svg";
 import OriginalIcon from "../Images/original-icon.svg";
 import WatchIcon from "../Images/watchlist-icon.svg";
 import MovieIcon from "../Images/movie-icon.svg";
 import SeriesIcon from "../Images/series-icon.svg";


import HomeIcon from "../Images/HomeIcon.svg";
const Header = () => {
  return (
    <nav className="headerlogin">
      <div className="headerlogo">
        <img src={Disneylogo} alt="DisneyLogo" />
      </div>
      <div className="headermenu">
        <a href="/Home" className="test" >
          <img src={HomeIcon} className="headerIcon" alt="HomeIcon" />
          <span >Home</span>
           </a>
           
           <a href="/Search" className="test" >
          <img src={SearchIcon} className="headerIcon" alt="HomeIcon" />
          <span >Search</span>
           </a>

           <a href="/Watchlist" className="test" >
          <img src={WatchIcon} className="headerIcon" alt="HomeIcon" />
          <span className="testspan ">Watchlist</span>
           </a>

           <a href="/Originals" className="test" >
          <img src={OriginalIcon} className="headerIcon" alt="HomeIcon" />
          <span >Originals</span>
           </a>

           <a href="/Movies" className="test" >
          <img src={MovieIcon} className="headerIcon" alt="HomeIcon" />
          <span >Movies</span>
           </a>
        
           <a href="/Series" className="test" >
          <img src={SeriesIcon} className="headerIcon" alt="HomeIcon" />
          <span >Series</span>
           </a>
        
      </div>
      <div><a className="headloginbtn">LOGIN</a></div>
      
    </nav>
  );
};

export default Header;
