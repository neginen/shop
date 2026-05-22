import React from "react";
import Header from './header/Header';
import Footer from './footer/Footer';
import Grid from "./grid/Grid"
import Caroselimg from "./carouselimg/Carouselimg"
import Loading from "./loading/Loading"
import Randcard from "./randcard/RandCard"
import Post from "./post/Post"
import LastCard from "./randcard/LastCard"


const Home = () => {
  return (
    <>
   
      <Header/>
      <Caroselimg />
      <Grid/>
      <Randcard/>
      <LastCard/>
      <Post/>    
      <Footer />
   
      
    </>
  )
}
export default Home