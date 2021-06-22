import React, {useEffect, useState} from 'react';
import axios from "./axios";
import "./Rows.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";
function Rows({title, fetchURL, isLargeRow}) {

    const [movies, setMovies] = useState([]);
    const [trailerURL, setTrailerURL] = useState("");

    useEffect(()=>{

        async function fetchData(){
            const request = await axios.get(fetchURL);
            //console.log(request.data.results);
            setMovies(request.data.results);
            return request;
        }
        fetchData();

    }, [fetchURL]); //Always include outside variables in this inorder to tell useEffect when to update the value

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

   
    const handleClick = (movie) => {
        if (trailerURL){
            setTrailerURL('');
        }
        else { 
            movieTrailer(movie?.name || "") 
            .then((url)=>{
                console.log("URLLLLLL"+movie.name);
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerURL(urlParams.get("v"));
            })
            .catch((error) => console.log(error));
        }
    }

    return (
        <div className="rows">
            <h1 className="rows__title">{title}</h1>

            <div className="rows__posters">
                {/* Movie Posters */}
                {movies.map(movie => (
                    <img
                    key={movie.id}
                    onClick = {() => handleClick(movie)}
                    key={movie.id}
                    className={`rows__poster ${isLargeRow && "row__posterLarge"}`} 
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/>
                ))}
            </div>
            {/* {trailerURL && <Youtube videoId={trailerURL} opts={opts}/>} */}
            {trailerURL && <Youtube videoId={trailerURL} opts={opts}/>}
        </div>
    );
}

export default Rows;