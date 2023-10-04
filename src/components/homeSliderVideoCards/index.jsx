import React, { useState, useEffect } from 'react';
import Carousel from 'react-spring-3d-carousel';
import './styles.css';

const HomeSliderVideoCards = ({ data }) => {
  const slides = [];
  data?.homeSlides?.map(item => {
    slides.push({
      "key": item?.key,
      "content": <iframe width="1280" height="720" src={item?.content} title={item?.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
    })
  });
  
  return (
    <div className="home-slider-video-cards-ctn">
      <Carousel slides={slides} showNavigation={true}/>
    </div>
  );
};

export default HomeSliderVideoCards;