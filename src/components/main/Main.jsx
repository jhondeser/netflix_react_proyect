import { useState, useEffect } from "react";
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './main.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

function Main() {
  const [responseData, setResponseData] = useState([]);
  const [urlList, setUrlList] = useState([
    "https://api.themoviedb.org/3/movie/now_playing?api_key=38758aa5680465c0472c269bc08e22d5&language=en-US",
    "https://api.themoviedb.org/3/movie/popular?api_key=38758aa5680465c0472c269bc08e22d5&language=en-US",
    "https://api.themoviedb.org/3/movie/top_rated?api_key=38758aa5680465c0472c269bc08e22d5&language=en-US",
    "https://api.themoviedb.org/3/movie/upcoming?api_key=38758aa5680465c0472c269bc08e22d5&language=en-US",
  ]);

  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  useEffect(() => {
    const fetchData = async () => {
      const responses = [];

      for (const url of urlList) {
        const response = await axios.get(url);
        responses.push(response.data.results);
      }

      setResponseData(responses);

    };
  
    fetchData();
    

  }, [urlList]);

  const category_main = ['Now Playing','Popular','Top Rated','Upcoming']

  return(
    <section className="main">
            <div className="main_categorys__container">
              {responseData.map((el, index) => (
                <div className="container_category">
                  <h3 className="category_title">{category_main[index]}</h3>
                  <Slider {...settings}>
                    {el.map((movie, index) => (
                      <Card 
                        onMouseEnter = {() => handleCardClick(movie)}  
                        onMouseLeave = {() => handleCardClick(null)}
                        className={selectedCard === movie ? 'selected' : ''}
                      >
                        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}/>
                          <Card.Body style={{ display: selectedCard === movie ? 'flex' : 'none' }}>
                            <Card.Title>{movie.title}</Card.Title>
                            <Card.Text className="rating">
                              <StartRating ratingPercentage = {movie.vote_average}></StartRating>
                            </Card.Text>
                            <Button variant="primary">Play Movie</Button>
                          </Card.Body>
                      </Card>
                    ))}
                  </Slider>
                </div> 
              ))}
            </div>
      
    </section>
  )
};

export default Main