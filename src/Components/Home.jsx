import React from 'react'
import styled from "styled-components";
import "../Styles/home.css"
import ImageSlider from './ImageSlider'
import NewDisney from './NewDisney';
import Originals from './Originals';
import Recommends from './Recommends';
import Trendings from './Trendings';
import Viewers from './Viewers';
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import db from "../Firebase"
import { setMovies } from '../features/movie/MovieSlice';
import { selectUserName } from '../features/user/UserSlice';
const Home = () => {
 
const dispatch=useDispatch();
const userName=useSelector(selectUserName);
let recommends=[]
let newDisney=[]
let originals=[]
let trendings=[]


useEffect(() => {
  console.log("hello");
  db.collection("movies").onSnapshot((snapshot) => {
    snapshot.docs.map((doc) => {
      console.log(recommends);
      switch (doc.data().type) {
        case "recommend":
          recommends = [...recommends, { id: doc.id, ...doc.data() }];
          break;

        case "new":
          newDisney = [...newDisney, { id: doc.id, ...doc.data() }];
          break;

        case "original":
          originals = [...originals, { id: doc.id, ...doc.data() }];
          break;

        case "trending":
          trendings = [...trendings, { id: doc.id, ...doc.data() }];
          break;
      }
    });

    dispatch(
      setMovies({
        recommend: recommends,
        newDisney: newDisney,
        original: originals,
        trending: trendings,
      })
    );
  });
}, [userName]);


  return (

    <div className='home'>
    
    
    <ImageSlider/>
    <Viewers/>
    <Recommends/>
    <NewDisney/>
    <Trendings/>
    <Originals/>
</div>

  )
}

export default Home