import React from 'react';
import 'Assets/styles/components/_carousel.scss';

const CarouselItem = () => {
  return (
    <div className="carousel">
      <div className="carousel__container">
        <div className="carousel-item">
          <img
            className="carousel-item__img"
            src="https://pokeres.bastionbot.org/images/pokemon/25.png"
            alt="pokemonimage"
          />
          <div className="carousel-item__details">
            <div className="">
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
            <p className="carousel-item__details--title">title</p>
            <p className="carousel-item__details--sub-title">sub title</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            className="carousel-item__img"
            src="https://pokeres.bastionbot.org/images/pokemon/25.png"
            alt="pokemonimage"
          />
          <div className="carousel-item__details">
            <div className="">
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
            <p className="carousel-item__details--title">title</p>
            <p className="carousel-item__details--sub-title">sub title</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            className="carousel-item__img"
            src="https://pokeres.bastionbot.org/images/pokemon/25.png"
            alt="pokemonimage"
          />
          <div className="carousel-item__details">
            <div className="">
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
            <p className="carousel-item__details--title">title</p>
            <p className="carousel-item__details--sub-title">sub title</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            className="carousel-item__img"
            src="https://pokeres.bastionbot.org/images/pokemon/25.png"
            alt="pokemonimage"
          />
          <div className="carousel-item__details">
            <div className="">
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
            <p className="carousel-item__details--title">Title</p>
            <p className="carousel-item__details--sub-title">Subtitle</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
