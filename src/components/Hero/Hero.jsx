import { useState, useEffect } from "react";
import axios from 'axios';
import './hero.css';
import Button from 'react-bootstrap/Button';;

function Hero() {
  const [hero,setHero] = useState(null);
  const [title,setTitle] = useState(null);
  const [overView,setOverView] = useState(null);  

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://api.themoviedb.org/3/movie/popular?api_key=38758aa5680465c0472c269bc08e22d5&language=en-US&page=1`
      );
      
      let random_movie = result.data.results[Math.floor(Math.random() * (result.data.results.length - 1))];
      setHero(`https://image.tmdb.org/t/p/original${random_movie.backdrop_path}`);
      setTitle(random_movie.title)
      setOverView(random_movie.overview)

    }
    
    fetchData();
  }, []);


  
  return (
    <section className="hero" style={{backgroundImage: `linear-gradient(to right, rgb(0 0 0 / 0.5), rgb(0 0 0 / 0)), url(${hero})`}}>
      <div className="hero_container" >
        <div className="hero_container__title">
          <h1 className="hero_title">{title}</h1>
        </div>
        <div className="hero_container_overview">
          <p className="hero_overview">{overView}</p>
        </div>
        <div className="hero_container_buttons">
          <Button className="btn_hero" variant="dark">Play</Button>{' '}
          <Button className="btn_hero" variant="dark">More info</Button>{' '}
        </div>
      </div>
    </section>
  )
}

export default Hero