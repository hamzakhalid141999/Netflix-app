import './Homescreen.css';
import React from 'react';
import Rows from '../Rows'
import request from "../Request";
import Banner from "../Banner";
import Nav from "../Nav"; 
function Homescreen() {
  return (
    <div className="Homescreen">

     {/* Nav */}
     <Nav/>
     <Banner/>
     <br></br>
     <Rows isLargeRow title="NETFLIX ORIGINALS" fetchURL={request.fetchNetflixOriginals}/>
     <Rows title="Trending Now" fetchURL={request.fetchTrending}/>
     <Rows title="Top Rated" fetchURL={request.fetchTopRated}/>
     <Rows title="Action Movies" fetchURL={request.fetchActionMovies}/>
     <Rows title="Comedy Movies" fetchURL={request.fetchComedyMovies}/>
     <Rows title="Horror Movies" fetchURL={request.fetchHorrorMovies}/>
     <Rows title="Romance Movies" fetchURL={request.fetchRomanceMovies}/>
     <Rows title="Documentaries" fetchURL={request.fetchDocumentaries}/>
    </div>
  );
}

export default Homescreen;
