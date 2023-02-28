import { useState, useEffect } from "react";
import axios from 'axios';
import './hero.css';
import Button from 'react-bootstrap/Button';
import { FaPlay } from 'react-icons/fa';
import { BsInfoLg } from 'react-icons/bs';

function StartRating(ratingPercentage) {
  const percentage = ratingPercentage
  const valor = percentage.ratingPercentage

  const numStarsFilled = Math.floor((valor / 10) * 5);

  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < numStarsFilled) {
      stars.push(<span key={i} className="filled-star">&#9733;</span>);
    } else {
      stars.push(<span key={i} className="empty-star">&#9734;</span>);
    }
  }

  return (
    <div>
      <p>{stars} {valor}</p>
    </div>
  );
}

function Hero() {
  const [hero,setHero] = useState(null);
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://api.themoviedb.org/3/movie/popular?api_key=38758aa5680465c0472c269bc08e22d5&language=en-US&page=1`
      );
      
      let random_movie = result.data.results[Math.floor(Math.random() * (result.data.results.length - 1))];
      setHero(`https://image.tmdb.org/t/p/original${random_movie.backdrop_path}`);
      setMovie(random_movie)

      console.log(random_movie);
    }
    
    fetchData();
  }, []);

  console.log(movie);
  
  return (
    <section className="hero" style={{backgroundImage: `linear-gradient(to right, rgb(0 0 0 / 1), rgb(0 0 0 / 0)), url(${hero})`}}>
      <div className="hero_container" >
        <div className="hero_container__title">
          <h1 className="hero_title">{movie.title}</h1>
        </div>
        <div className="hero_container__release-date">
          <p><StartRating ratingPercentage = {movie.vote_average}></StartRating></p>
          <p>{movie.release_date}</p>
        </div>
        <div className="hero_container_overview">
          <p className="hero_overview">{movie.overview}</p>
        </div>
        <div className="hero_container_buttons">
          <Button className="btn_hero" variant="dark">
            <FaPlay/>  Play Now
          </Button>{' '}
          <Button className="btn_hero" variant="dark">
            <BsInfoLg /> More info
          </Button>{' '}
        </div>
      </div>
    </section>
  )
}

export default Hero