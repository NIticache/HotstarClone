
import React from "react";
import { useEffect } from "react";
import "../Styles/Login.css";
import Disneylogo from "../Images/Disneylogo.svg";
import SearchIcon from "../Images/search-icon.svg";
import OriginalIcon from "../Images/original-icon.svg";
import WatchIcon from "../Images/watchlist-icon.svg";
import MovieIcon from "../Images/movie-icon.svg";
import SeriesIcon from "../Images/series-icon.svg";
import { auth, provider } from "../Firebase";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUserEmail,selectUserName, selectUserPhoto, setSignOutState, setUserLoginDetails } from "../features/user/UserSlice";
import HomeIcon from "../Images/HomeIcon.svg";
const Header = () => {
const dispatch=useDispatch();
const navigate =useNavigate();
const username=useSelector(selectUserName);
const userPhoto =useSelector(selectUserPhoto);

  const handleAuth = () => {
    if(!username)

    
 { auth
    .signInWithPopup(provider)
    .then((result) => setUser(result.user))
    .catch((error) => alert(error));}
    else if(username){
      auth.signOut().then(()=>{
        dispatch(setSignOutState());
        navigate('/')
      }).catch((err=>{alert(err.message)}))
    }
  };
  const setUser=(user)=>{
    dispatch(
      setUserLoginDetails({
        name:user.displayName,
        email:user.email,
        photo:user.photoURL

      })
    )
  }
useEffect(()=>{
  auth.onAuthStateChanged(async(user)=>{
    if(user){
      setUser(user)
      navigate('./home')
    }
  })
},[username])

  return (
    <nav className="headerlogin">
      <div className="headerlogo">
        <img src={Disneylogo} alt="DisneyLogo" />
      </div>
      {
       !username?  <div onClick={handleAuth}>
        <a className="headloginbtn">LOGIN</a>
      </div>:
      <>
      
      <div className="headermenu">
        <a href="/Home" className="test">
          <img src={HomeIcon} className="headerIcon" alt="HomeIcon" />
          <span>Home</span>
        </a>

        <a href="/Search" className="test">
          <img src={SearchIcon} className="headerIcon" alt="HomeIcon" />
          <span>Search</span>
        </a>

        <a href="/Watchlist" className="test">
          <img src={WatchIcon} className="headerIcon" alt="HomeIcon" />
          <span className="testspan ">Watchlist</span>
        </a>

        <a href="/Originals" className="test">
          <img src={OriginalIcon} className="headerIcon" alt="HomeIcon" />
          <span>Originals</span>
        </a>

        <a href="/Movies" className="test">
          <img src={MovieIcon} className="headerIcon" alt="HomeIcon" />
          <span>Movies</span>
        </a>

        <a href="/Series" className="test">
          <img src={SeriesIcon} className="headerIcon" alt="HomeIcon" />
          <span>Series</span>
        </a>
      
      
      </div>

<div className="signout">
 <img className="gooleuserimage"src={userPhoto} alt={username}/>
 <div className="dropdown">
  <span onClick={handleAuth}>Sign out</span>
 </div>
</div>
      </>
}
    </nav>
  );
};

export default Header;
